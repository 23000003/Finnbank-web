import { useEffect } from "react";
import { ActivityData } from "../types/entities/transaction.entity";
import { TransactionStatusEnum, TransactionTypeEnum } from "../types/enums/transaction.enum";

type SocketProps = {
  url: string;
  type: string;
  setActivityData?: React.Dispatch<React.SetStateAction<ActivityData[]>>;
  setNotifCount?: React.Dispatch<React.SetStateAction<number>>;
};

export const useSocketConnection = ({ url, type, setActivityData }: SocketProps) => {
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080/api/ws/${url}`);
    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };
    ws.onmessage = (event) => {
      if (type === "transaction") {
        const message: ActivityData = JSON.parse(event.data);
        message.transaction_status =
          message.transaction_status.toUpperCase() as TransactionStatusEnum;
        message.transaction_type = message.transaction_type.toUpperCase() as TransactionTypeEnum;
        console.log("Transaction message:", message);

        if (setActivityData) {
          setActivityData((prevData) => [message, ...prevData]);
        }
      }

      console.log("WebSocket event:", event);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, [url, type, setActivityData]);
};
