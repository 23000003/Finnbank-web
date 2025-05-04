import { api } from "../configs/axios";
import { Notification } from "../types/entities/notification.entity";
import { NotificationTypeEnum } from "../types/enums/notification.enum";

type UnreadAndAllNotifCount = {
  total_notification: number;
  unread_notification: number;
};

type CreateNotificationDTO = {
  notif_type: NotificationTypeEnum;
  notif_to_id: string;
  notif_from_name: string;
  content: string;
};

export class NotificationService {
  private static prefix = "/notification";
  static async getCountNotifications(userId: string) {
    try {
      const res = await api.get<{ data: UnreadAndAllNotifCount }>(
        `${this.prefix}/get-all-unread/${userId}`
      );
      return res.data.data;
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }
  static async getAllNotifications(userId: string, limit: number) {
    try {
      const res = await api.get<{ data: Notification[] }>(
        `${this.prefix}/get-all/${userId}/${limit.toString()}`
      );
      return res.data.data;
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }
  static async generateNotification(dto: CreateNotificationDTO) {
    try {
      const res = await api.post<{ data: Notification }>(`${this.prefix}/generate-notif`, dto);
      return res.data.data;
    } catch (error) {
      console.error("Error creating notification:", error);
      throw error;
    }
  }
  static async readNotification(notifId: string) {
    try {
      await api.patch(`${this.prefix}/mark-as-read/${notifId}`);
    } catch (error) {
      console.error("Error reading notification:", error);
      throw error;
    }
  }
}
