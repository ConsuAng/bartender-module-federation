# Angelus Bartender Frontend

Web page for Angelus Bartender generate with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4. and [Module Federations] (https://www.angulararchitects.io/blog/the-microfrontend-revolution-module-federation-in-webpack-5/) for the micro frontends architecture.
Here you can create an account, search for differents cocktails and save your favorites ♥

## Development server

For local dev server run this command on different consoles:

`ng serve host-app`
`ng serve mf-cocktails`
`ng serve mf-login`
`ng serve mf-user`

Navigate to `http://localhost:4201/`. The application will automatically reload if you change any of the source files.

Be sure to serve the host-app because is the shell for the others modules.

## Ussing Docker

Run `docker-compose build` and `docker-compose up`


