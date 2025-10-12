# Notes-By-Nerds — BackEnd

This folder contains the Node/Express backend for the Notes-By-Nerds project. It exposes REST endpoints for notes and feedbacks, handles authentication with Passport and JWT, and persists data to MongoDB via Mongoose.

## Quick summary
- Stack: Node.js, Express, Mongoose (MongoDB), Passport (local), JWT
- Entry point: `index.js`
- Important routes: `/notes`, `/feedbacks`, `/api` (see `routes/index-routes.js`)

## Prerequisites
- Node.js (tested with Node 12+; newer versions should work)
- npm
- A MongoDB connection string (Atlas / mLab / self-hosted)

## Environment
Create a `.env` file in this folder (or provide env vars via your environment). Example `.env` values:

PORT=3000
MONGO_ONLINE_URL=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/<dbname>?retryWrites=true&w=majority
# optional local fallback (not used by default)
# MONGO_LOCAL_URL=mongodb://localhost:27017/notes-by-nerds
BASE_URL_FRONTEND_1=http://localhost:4200
BASE_URL_FRONTEND_2=http://127.0.0.1:4200

Note: `jwtHelper.js` currently uses a hard-coded secret string (`"SECRET#123"`). For production, replace that with an environment variable (for example `JWT_SECRET`) and update the code accordingly.

## Install
From the `BackEnd` folder:

```bash
npm install
```

## Run (development)
The `package.json` contains a `start` script that runs `nodemon index.js`.

```bash
npm run start
```

The server will read environment variables and listen on `PORT`.

## Endpoints (overview)
- `GET/POST /notes` — notes CRUD (see `controllers/noteController.js`)
- `GET/POST /feedbacks` — feedback endpoints (see `controllers/feedbackController.js`)
- `/api` — additional routes registered in `routes/index-routes.js`

## Development notes
- CORS origins are read from `BASE_URL_FRONTEND_1` and `BASE_URL_FRONTEND_2` in `.env`. If your frontend runs on a different host/port, add it there.
- If you see DB connection errors, check the `MONGO_ONLINE_URL` value in `.env` and make sure your IP whitelist / user credentials are correct (if using Atlas).
- To secure JWTs: replace the hard-coded secret in `config/jwtHelper.js` with `process.env.JWT_SECRET` and set `JWT_SECRET` in your `.env`.

## Troubleshooting
- Server crashes on start: make sure `PORT` is set and `npm install` completed.
- `Error in DB connection`: confirm Mongo connection string and network access.
- Token auth failing: check the JWT secret used to sign tokens matches the one used to verify them.

## Contribution
- Follow the existing code style. Controller files are in `controllers/`, models in `models/`, and route registrations in `routes/`.

## Contact
If something in the backend is unclear, open an issue or contact the maintainer listed in the repo.
