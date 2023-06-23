import { Component } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(private notificationService: NotificationService) {}

  successMessage$ = this.notificationService.successMessageAction$.pipe(
    tap((message) => {
      if (message) {
        setTimeout(() => {
          this.notificationService.clearAllMessages();
        }, 6000);
      }
    })
  );
  errorMessage$ = this.notificationService.errorMessageAction$.pipe(
    tap((message) => {
      if (message) {
        setTimeout(() => {
          this.notificationService.clearAllMessages();
        }, 7000);
      }
    })
  );
}
