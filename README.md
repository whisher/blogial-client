# BlogialClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Getting started

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm start
 ```
3. Build universal:
  ```sh
  npm run build:ssr
  ```
4. Launch universal server, and open `localhost:4000` in your browser:
  ```sh
  npm run serve:ssr
  ```

# Project structure

```
dist/                        web app production build
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- features/              features modules
|  |- shared/                shared module
|  |- store/                 ngrx
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- style.scss                 global style entry point
|- main.ts                   app entry point
|- main.server.ts            universal entry point
+- test.ts                   unit tests entry point
ngsw-config.json             set up service worker (pwa)
server.ts                    express server
```
