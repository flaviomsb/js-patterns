import type { NotificationService } from './NotificationService';

export class NotificationManager {
  protected service: NotificationService;

  public constructor(service: NotificationService) {
    this.service = service;
  }

  public notify(message: string): void {
    this.service.sendNotification(message);
  }
}
