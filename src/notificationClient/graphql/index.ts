export const createNotificationMutation = `
  mutation createNotification($notificationData: NotificationCreateDto!) {
    createNotification(notification: $notificationData) {
      webNotifications
    }
  }
`;
