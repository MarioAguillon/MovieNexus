import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),                          // Habilita la API Fetch moderna (más rápida y compatible con SSR)
      withInterceptors([apiInterceptor, errorInterceptor])    // Registra nuestros interceptores
    ),
    provideClientHydration(withEventReplay()),
    // NUEVO: Registrar el Service Worker
    provideServiceWorker('ngsw-config.json', {
      enabled: !isDevMode(),    // Solo en producción
      registrationStrategy: 'registerWhenStable:3000'
    })
  ]
};
