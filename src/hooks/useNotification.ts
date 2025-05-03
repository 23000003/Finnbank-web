import { useEffect, useState } from "react";
import { Notification } from "../types/entities/notification.entity";
import useActionStatus from "./useActionStatus";
import { NotificationService } from "../services/notification.service";

export const useNotification = (userId: string, route?: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [notifCount, setNotifCount] = useState(0);
  const [unreadNotif, setUnreadNotif] = useState(0);
  const [limit, setLimit] = useState(3);

  const { loading, setLoading, setErrorMessage } = useActionStatus(true);

  useEffect(() => {
    const fetchUnreadNotifications = async () => {
      try {
        const data = await NotificationService.getCountNotifications(userId);
        console.log("Notifications:", data);
        setNotifCount(data.total_notification);
        setUnreadNotif(data.unread_notification);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchUnreadNotifications();
  }, [userId]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const data = await NotificationService.getAllNotifications(userId, limit);
        setNotifications(data);
        console.log("Notifications:", data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setErrorMessage("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };
    if (route === "/home/updates") {
      fetchNotifications();
      console.log("fetchNotifications", route);
    }
  }, [userId, setLoading, setErrorMessage, limit, route]);

  const readNotification = async (notifId: string) => {
    try {
      setLoading(true);
      await NotificationService.readNotification(notifId);
      setNotifications((prev) =>
        prev.map((notif) => (notif.notif_id === notifId ? { ...notif, is_read: true } : notif))
      );
      setSelectedNotification((prev) =>
        prev && prev.notif_id === notifId ? { ...prev, is_read: true } : prev
      );
      setUnreadNotif((prev) => prev - 1);
    } catch (error) {
      console.error("Error reading notification:", error);
    } finally {
      setLoading(false);
    }
  };

  const viewNotification = async (notifId: string) => {
    setSelectedNotification(notifications.find((notif) => notif.notif_id === notifId) || null);
  };

  if (route === "/home/updates") {
    return {
      notifications,
      loading,
      notifCount,
      setLimit,
      limit,
      viewNotification,
      selectedNotification,
      readNotification,
    };
  }

  return {
    unreadNotif,
    setUnreadNotif,
  };
};
