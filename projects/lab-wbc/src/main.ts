import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { LocationElement } from './app/location.element';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const labLocationComponent = createCustomElement(LocationElement, {
    injector: app.injector,
  });
  customElements.define('lab-wbc-location', labLocationComponent);
})();
