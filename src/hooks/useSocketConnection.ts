import { useEffect } from "react";
import { ActivityData } from "../types/entities/transaction.entity";
import { TransactionStatusEnum, TransactionTypeEnum } from "../types/enums/transaction.enum";
import { NotificationTypeEnum } from "../types/enums/notification.enum";
import { NotificationService } from "../services/notification.service";

type SocketProps = {
  url: string;
  type: string;
  userId: string;
  fullName?: string;
  setActivityData?: React.Dispatch<React.SetStateAction<ActivityData[]>>;
  activityData?: ActivityData[];
  setNotifCount?: React.Dispatch<React.SetStateAction<number>>;
  openedAccountIds?: number[];
};

const sendNotification = async (
  status: TransactionStatusEnum,
  receiverId: number,
  senderId: number,
  userId: string,
  fullName: string | undefined,
  openedAccountIds: number[] | undefined,
  amount: string,
  notes: string
) => {
  const notifDto = {
    notif_type: NotificationTypeEnum.TRANSACTION,
    notif_to_id: "",
    notif_from_name: "",
    content: "",
  };

  console.log(userId, senderId, receiverId, openedAccountIds);

  if (status === TransactionStatusEnum.FAILED && openedAccountIds?.includes(senderId)) {
    notifDto.notif_to_id = userId;
    notifDto.notif_from_name = "Automated System";
    notifDto.content = "Transaction failed with the following reasons: ";
  } else if (openedAccountIds?.includes(receiverId) && status === TransactionStatusEnum.COMPLETED) {
    notifDto.notif_to_id = userId;
    notifDto.notif_from_name = "Automated System";
    notifDto.content = "Deposit transaction successful.";
    console.log("Deposit transaction successful", userId);
  } else if (status === TransactionStatusEnum.COMPLETED && !openedAccountIds?.includes(senderId)) {
    // Loophole for the receiver that is not the sender (since this function executes eachother)
    notifDto.notif_to_id = userId;
    notifDto.notif_from_name = fullName || "Automated System";
    notifDto.content =
      "You have received an amount ₱" + amount + " with the following Notes: " + notes;
    // try {
    //   const targetUserId = await OpenedAccountService.getUserIdByOpenedAccountId(receiverId);
    //   notifDto.notif_to_id = targetUserId.account_id;
    //   notifDto.notif_from_name = fullName || "Automated System";
    //   notifDto.content = "You have received an amount ₱" + amount + " with the following Notes: " + notes;
    //   console.log("Transaction completed successfully", targetUserId.account_id);
    // } catch (error) {
    //   console.error("Error fetching user ID:", error);
    //   return;
    // }
  } else {
    console.log("Nothing to do here");
    return;
  }
  try {
    console.log("notifDto HERE", notifDto);
    console.log(status, receiverId, userId);
    await NotificationService.generateNotification(notifDto);
  } catch (error) {
    console.error("Error generating notification:", error);
  }
};

export const useSocketConnection = ({
  url,
  type,
  setActivityData,
  setNotifCount,
  openedAccountIds,
  userId,
  fullName,
  activityData,
}: SocketProps) => {
  useEffect(() => {
    // // const token = localStorage.getItem("token");
    // // const ws = new WebSocket(`ws://localhost:8080/api/ws/${url}?token=${encodeURIComponent(token as string)}`);
    // const ws = new WebSocket(`ws://localhost:8080/api/ws/${url}`);
    const token = localStorage.getItem("token"); // or however you store it
    const ws = new WebSocket(`ws://localhost:8080/api/ws/${url}?token=${token}`);
    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      console.log("Transaction message:", parsedData);
      if (type === "transaction") {
        const message: ActivityData = parsedData;
        console.log("transaction");
        console.log("OA", openedAccountIds);

        message.receiver_id = Number(message.receiver_id);
        message.sender_id = Number(message.sender_id);

        const isInvolved =
          (openedAccountIds as number[]).includes(message.receiver_id) ||
          (openedAccountIds as number[]).includes(message.sender_id);

        console.log("isInvolved", isInvolved);

        const status = message.transaction_status.toUpperCase() as TransactionStatusEnum;

        console.log("status", status);
        console.log(status !== TransactionStatusEnum.PENDING);

        if (!isInvolved) return;

        if (status !== TransactionStatusEnum.PENDING) {
          console.log("QUEUE DONE");
          void sendNotification(
            status,
            (activityData as ActivityData[])[0].receiver_id,
            (activityData as ActivityData[])[0].sender_id,
            userId,
            fullName,
            openedAccountIds,
            (activityData as ActivityData[])[0].amount,
            (activityData as ActivityData[])[0].notes
          );
          if (setActivityData) {
            setActivityData((prevData) => {
              const index = prevData.findIndex(
                (data) => data.transaction_id === message.transaction_id
              );
              if (index !== -1) {
                const updated = [...prevData];
                updated[index].transaction_status = message.transaction_status;
                return updated;
              }
              return prevData;
            });
          }
        } else {
          console.log("QUEUE PENDING");
          message.transaction_status = status;
          message.transaction_type = message.transaction_type.toUpperCase() as TransactionTypeEnum;
          if (setActivityData && openedAccountIds?.includes(message.sender_id)) {
            console.log(message.sender_id);
            console.log(openedAccountIds);
            setActivityData((prevData) => [message, ...prevData]);
          }
        }
      } else if (type === "notification") {
        console.log("Notification message:", parsedData);
        if (setNotifCount && parsedData.notif_to_id === userId) {
          setNotifCount((prevCount) => prevCount + 1);
        }
      }
    };

    ws.onopen = () => console.log("WebSocket connected", url);
    ws.onerror = (e) => console.error("WebSocket error:", e, url);
    ws.onclose = () => console.log("WebSocket closed", url);

    return () => {
      ws.close();
    };
  }, [url, type, userId, fullName, openedAccountIds, setActivityData, setNotifCount, activityData]);
};
