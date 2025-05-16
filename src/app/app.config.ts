import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(withInterceptors([AuthTokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
