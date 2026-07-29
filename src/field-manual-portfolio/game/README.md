# Pixel zombie game and Railway API

The game registers a player through a server-side API before starting. The
MongoDB connection string is never included in the browser bundle.

## Local setup

1. Copy the values from `.env.example` into the repository root `.env`.
2. Replace `MONGODB_URI` with an Atlas database user that can only write to the
   intended portfolio database.
3. Allow the API host's address in the Atlas network access list.
4. Install the standalone backend package:

   ```sh
   pnpm --dir src/field-manual-portfolio/game/backend install
   ```

5. Start the API with Node 20.6 or newer:

   ```sh
   pnpm run start:backend
   ```

6. To validate the backend production entry point:

   ```sh
   pnpm run build:backend
   ```

7. In another terminal, run the Vite site:

   ```sh
   pnpm dev
   ```

## One-time Railway setup

1. Create an empty Railway project and service, then link this repository:

   ```sh
   pnpm exec railway link
   ```

   Select the zombie-game API service when prompted. Railway saves this
   selection locally in the ignored `.railway` directory.

2. In the linked Railway service, add:
   - `MONGODB_URI`
   - `MONGODB_DB`
   - `MONGODB_COLLECTION`
   - `ALLOWED_ORIGINS=https://dihanmalik.github.io`
3. Run the first API deployment:

   ```sh
   pnpm run deploy:api
   ```

4. Generate a public Railway domain for the service:

   ```sh
   pnpm exec railway domain
   ```

5. Set the repository root `.env` value to:

   ```text
   VITE_VISITOR_API_URL=https://YOUR-RAILWAY-DOMAIN/api/visitors
   ```

   Do not place `MONGODB_URI` in `VITE_VISITOR_API_URL`. Every `VITE_` value is
   compiled into public browser JavaScript. The deploy script checks this and
   stops before publishing if the value is missing or unsafe.

Railway supplies `PORT` automatically. The included `railway.json` configures
the start command, `/health` deployment check, and restart policy.

## Deploying everything

After the one-time setup, run:

```sh
pnpm run deploy
```

The root script deploys and health-checks the Railway API first. Only after that
succeeds does it build and publish the frontend to GitHub Pages.

`ALLOWED_ORIGINS` accepts a comma-separated list. Keep the production list
restricted to the portfolio origin.
