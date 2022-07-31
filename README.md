# Library app
### How to run backend
- My node version = 16.6.*
- npm install
- npm run start or npm run dev
- you will need a .env file
### Mine looks like this
- POSTGRES_USER=postgres
- POSTGRES_PASSWORD=password
- DB_DEVELOPMENT=library_dev 
- DB_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${DB_DEVELOPMENT}?schema=public
