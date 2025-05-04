import { NotificationTypeEnum } from "../enums/notification.enum";

export type Notification = {
  notif_id: string;
  notif_type: NotificationTypeEnum;
  notif_from_name: string;
  content: string;
  is_read: boolean;
  date_notified: string;
};
