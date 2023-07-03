import { Component } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { tap } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  userData$ = this.authService.getUser();

  constructor(private notificationService: NotificationService, private authService: AuthService) {}

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

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
