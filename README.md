# WsUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

```bash
ng new ws-ui --no-create-application
ng g lib lab-ui --prefix=lab-ui --style=css
ng g app lab-ui-host --minimal
ng config projects.lab-ui.schematics.@schematics/angular:component.changeDetection \"OnPush\"
ng config projects.lab-ui.schematics.@schematics/angular:component.flat true
ng config projects.lab-ui.schematics.@schematics/angular:component.inlineTemplate true
ng config projects.lab-ui.schematics.@schematics/angular:component.inlineStyle true
ng config projects.lab-ui.schematics.@schematics/angular:component.style \"none\"
```

### Development and testing

```bash
# "watch": "ng build lab-ui --watch --configuration development",
npm run watch
# "start": "ng serve lab-ui-host",
npm start
# "test": "ng test lab-ui"
npm test
```

### Build and publish

```bash
# "publish": "npm run build && cd dist/lab-ui && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
# target the global npm link
cd ..
ng new lab-target --minimal
cd lab-target
npm link lab-ui
# build.options: preserveSymlinks: true
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
