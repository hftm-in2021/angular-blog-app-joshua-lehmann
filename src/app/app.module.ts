import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthConfigModule } from './core/auth/auth-config.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandlerService } from './core/error/global-error-handler.service';
import { AuthInterceptor } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, AuthConfigModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
