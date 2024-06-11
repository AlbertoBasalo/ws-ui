import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { DateElement } from './app/date.element';
import { LocationElement } from './app/location.element';

(async () => {
  const app: ApplicationRef = await createApplication({ providers: [] });

  // Define Web Components

  const labLocationComponent = createCustomElement(LocationElement, {
    injector: app.injector,
  });
  customElements.define('lab-wbc-location', labLocationComponent);

  const labDateComponent = createCustomElement(DateElement, {
    injector: app.injector,
  });
  customElements.define('lab-wbc-date', labDateComponent);
})();
