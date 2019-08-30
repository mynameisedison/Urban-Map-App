## Welcome!

To get this app started in development mode, we need to start the database.
run the following commands:

make sure npm is installed with npm install -g

```npm install pg express knex;``` to install node-postgres, express, and knex

```createdb urban;``` creates database called "urban"

```knex migrate:latest;``` uses the knex migration files to push tables to psql database

```knex seed:run;``` knex uses seed files to push data to tables inside database

```psql urban;``` opens psql at database "urban"

```CREATE ROLE me WITH LOGIN PASSWORD 'password';``` creates role called me and creates a password

```ALTER ROLE me CREATEDB;``` allows user me to create database

```GRANT ALL PRIVILEGES ON TABLE surgerycenters TO me;```

```GRANT ALL PRIVILEGES ON TABLE districts TO me;``` grants user me all privileges for tables surgerycenters and districts

database is now set up. \q to leave psql.

To get the server started, run:
```node server.js```

Endpoints are located at [http://localhost:5000/surgerycenters](http://localhost:5000/surgerycenters) and [http://localhost:5000/districts](http://localhost:5000/districts)


to start react app, run:

```npm start```

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
