import type { NotificationService } from './NotificationService';

export class EmailService implements NotificationService {
  public sendNotification(_message: string): void {
    // to be implemented
  }
}
