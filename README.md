# nodejs-test
This service builds on top of the NodeJS . nodejs-test is server-side . using ExpressJS, DBMS : Postgresql and Design patern : Service Repository Patern 

## Installations
- Install DBeaver/TablePlus/pgAdmin and PostgreSQL
- Create file . env at nodejs-test
You need to configure the .env file manually : 
```
TOKEN_SERVER_PORT = 4000
PORT = 5000

# Database Credential
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_DIALECT=your_db_dialect

Adjust the credential database on your device using config/config.js

# JWT
JWT_SECRET= jwt_secret
JWT_EXPIRED= 24h
``` 

## Running Project
```
langkah-langkah access file:
1. lakukan perintah di terminal : npm install
2. lakukan perintah di terminal : npx sequelize-cli model:generate --name User --attributes nomorKaryawan:string,username:string,password:string,nama:string,tglLahir:string
3. lakukan perintah di terimnal : npx sequelize-cli db:migrate
4. untuk run lakukan perintah di terminal : npm run dev
5. Buka folder reactjs-test untuk menjalankan client-side
```

## API Listing V1 (Version 1)
### List Endpoints
Local Run : http://localhost:4000

``
 ``` Auth Systems ```
 1.  Register User              : /v1/auth/register     : METHOD = POST (hanya untuk membuat user di postman)
 2.  Login User                 : /v1/auth/login        : METHOD = POST
 3.  Current User               : /v1/auth/me           : METHOD = GET
```

```
 ``` List Job Systems ```
 1. Get List Job        : /v1/jobs/getAll               : METHOD = GET (untuk parameter bisa ditambahkan. ex : /v1/jobs/getAll?description=ruby , /v1/jobs/getAll?location=remote, dll.)
 2. Get Job By Id       : /v1/jobs/:id                  : METHOD = GET
```

