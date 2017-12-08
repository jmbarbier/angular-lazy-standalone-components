# AngularLazyStandaloneComponents

## "standalone" lazy components

Angular is heavily SPA oriented, but also can be used to provide on demand
small components in a server-side rendered application.

This is a sample project to validate 

- bootstraping multiple angular components on any server-generated page (supporting multiple instance of a component)
- lazy loading component modules
- compatible with router navigation inside modules
- aot ready

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

`ng build --prod -vc -cc --build-optimizer  -nc --output-hashing=none`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

