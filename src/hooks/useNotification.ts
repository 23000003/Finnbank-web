import { useEffect, useState } from "react";
import { Notification } from "../types/entities/notification.entity";
import useActionStatus from "./useActionStatus";
import { NotificationService } from "../services/notification.service";

export const useNotification = (userId: string, route?: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [tempNotifications, setTempNotifications] = useState<Notification[]>([]);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [notifCount, setNotifCount] = useState(0);
  const [unreadNotif, setUnreadNotif] = useState(0);
  const [limit, setLimit] = useState(3);
  const [filter, setFilter] = useState("all");

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
    switch (filter) {
      case "unread":
        setNotifications(tempNotifications.filter((notif) => !notif.is_read));
        break;
      case "read":
        setNotifications(tempNotifications.filter((notif) => notif.is_read));
        break;
      default:
        setNotifications(tempNotifications);
        break;
    }
  }, [filter, tempNotifications]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const data = await NotificationService.getAllNotifications(userId, limit);
        setTempNotifications(data); // this will trigger the other useEffect
        console.log("Notifications:", data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    if (route === "/home/updates") {
      fetchNotifications();
      console.log("fetchNotifications", route);
    }
  }, [userId, limit, route, setLoading, setErrorMessage]);

  const readNotification = async (notifId: string) => {
    try {
      setLoading(true);
      await NotificationService.readNotification(notifId);
      setNotifications((prev) =>
        prev.map((notif) => (notif.notif_id === notifId ? { ...notif, is_read: true } : notif))
      );
      setTempNotifications((prev) =>
        prev.map((notif) => (notif.notif_id === notifId ? { ...notif, is_read: true } : notif))
      );
      setSelectedNotification((prev) =>
        prev && prev.notif_id === notifId ? { ...prev, is_read: true } : prev
      );
      setUnreadNotif((prev) => prev - 1);
      setLoading(false);
    } catch (error) {
      console.error("Error reading notification:", error);
      setErrorMessage("Something went wrong...");
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
      setFilter,
    };
  }

  return {
    unreadNotif,
    setUnreadNotif,
  };
};
