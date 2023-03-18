# Jate From Progressive

## Introduction and Purpose:

I used this bootcamp exercise to become acquainted with the the Progressive Web Application design pattern. The task called for bundling the assets of a web application (a rudimentary text editor provided by the instructors) using webpack, using the Cache API to manage their loading, adding a service worker, saving the data in IndexDB using the idb library, using localstorage as the offline fallback option, and making the application natively deployable via Workbox.

## Scenario:

A fictional developer wishes to create notes or code snippets with or without an internet connection, so that they may be reliably retrieved for later use.

## Results and Technical Overview:

The application is deployed live on [Heroku](https://jate-from-progressive.herokuapp.com/). 

## Installation

`npm i` to install the application.

`npm run start` will build the client and run the node server simultaneously.

The application will take text input and write it to IndexDB, and it will use localstorage for backup storage when internet is not available. When the browser window is closed and later restored, any text previously entered will also be restored. The 'Install' button will install the PWA as a native application.

![image](https://user-images.githubusercontent.com/121476474/226116272-8ed52821-481e-4e9f-b5fc-f833f09abdad.png)

## Testing and Dependencies

This project uses Express for the server side, webpack for bundling, Workbox for service worker creation and installation, and Babel for adaptation of modern code. 

## License

MIT
