import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAiSdk } from '@hahnpro/ai-sdk';

export const appConfig: ApplicationConfig = {
  providers: [provideAiSdk(), provideZoneChangeDetection({ eventCoalescing: true })]
};
