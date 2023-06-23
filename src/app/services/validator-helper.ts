import { map, pipe } from 'rxjs';
import { z } from 'zod';
import { NotificationService } from './notification.service';

export function verifyResponseType<T extends z.ZodTypeAny>(
  zodObj: T,
  notificationService: NotificationService
) {
  return pipe(
    map((response) => {
      const result = zodObj.safeParse(response);
      if (!result.success) {
        console.log('error', result.error.errors[0]);
        notificationService.setErrorMessage(
          `Validation error: ${result.error.errors[0].message} for property "${
            result.error.errors[0].path[1] || result.error.errors[0].path[0]
          }"`
        );
      } else {
        return result.data;
      }
    })
  );
}
