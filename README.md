# README #

This is a node.js test for the LeadWeb company.

### What you need ###

* node with npm (obviously)
* bash (sorry windows user)
* sqlite3

### How do I get set up? ###

To run the dev server just :
```bash
npm start
```
or with yarn
```bash
yarn start
```

To reset the database (will run the initDatabase.sql file)
```bash
npm run resetDB
```
or with yarn
```bash
yarn resetDb
```

### Description ###

We want to create an api that accept stock symbol to be saved in the database. Then  we want the API to fetch all the last
prices for each day by using the iextrading api (https://iextrading.com/developer/docs/) The final step will be to notify everyone
connected to a websocket to be notified for new closing prices in the database

### Todo list ###

1. Create a Rest Api for new a model named "symbol" [GET (list and get by id), POST, DELETE].
2. Create a Rest Api for a new model named "price" containing the closing price of the share [GET (list and get by id, DELETE].
3. Implement an async task that fetch from https://api.iextrading.com the closing prices for the last year and save it into the model "price"
4. Update the "symbol" endpoint so it shows the list of photo related to the "symbol" when fetching only one.
5. Install a websocket on the server that broadcast on all connexion when new prices has been fetched.

### Good to know ###

* You can use typescript if you want (we use it and we love it)
* You can use other npm module if you need it
* the API should follow the REST standard (Hints are provided for the http method)
* The API call should provide good output on bad request.
* Dont manage database errors (we assume that it works)
* The project structure is currently very simple, don't hesitate to make it better for your needs
* the app needs to be unit tested
* NO ORM