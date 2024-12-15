import { describe, test, expect, jest } from '@jest/globals';
import { EmailService } from './EmailService';
import { NotificationManager } from './NotificationManager';

describe('NotificationManager IoC', () => {
  test('should inject the service into the manager class', () => {
    const emailService = new EmailService();
    const emailManager = new NotificationManager(emailService);

    const spiedSendNotification = jest
      .spyOn(emailService, 'sendNotification')
      .mockImplementation((message: string) => {});

    emailManager.notify('email message sample');

    expect(spiedSendNotification).toHaveBeenCalledWith('email message sample');

    spiedSendNotification.mockRestore();
  });
});
