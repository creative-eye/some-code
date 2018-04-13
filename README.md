### General idea
There are 2 examples implemented, one for a pull API, one for a push API. The code is very basic and aims more to give some very generic examples.
They both use webpack for bundling with vanilla js and some basic libraries.
Some pieces of code that I did not consider important are sloppy (copied from some of my older projects), eg: webpack build config, node mock server.
No eslint and no unit tests were implemented for the sake of brevity.

### Pull API
Highligted in the the `1` folder.

#### How to run
cd to projects root (1 or 2 folders)
```
npm install
npm start
node ./server
```

1 folder contains some very basic code for taking data from a mock node server. The code of interest can be found in 'src/js'. Services are ment to make the calls and add some mapping of data in case it is generic and needed. Controllers implement the business logic, while the app.js implements the 'view' part.

### Push API
Highligted in the the `2` folder.

#### How to run
cd to projects root (1 or 2 folders)
```
npm install
npm start
```
Very, very basic example, uses webpack and rx.js to run an example of reactive programming. I am a beginner with Rx.JS (although a great fan) and wanted for some time to take a stab at it.
The example is very basic and asumes that we have some data that comes via websockets or server side events that needs to be displayed in the front end.
