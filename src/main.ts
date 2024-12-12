import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations"
import {provideToastr} from "ngx-toastr"

// Extend appConfig to include HttpClient
const extendedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Include existing providers from appConfig
    provideHttpClient(),           // Add HttpClient here
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    })
  ],
};

bootstrapApplication(AppComponent, extendedAppConfig)
  .catch((err) => console.error(err));
