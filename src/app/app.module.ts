import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthConfigModule } from './core/auth/auth-config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, AuthConfigModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
