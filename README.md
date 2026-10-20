# Impera

Impera is a full-stack Next.js application. The existing responsive website is rendered by React, while Next.js Route Handlers provide the backend without a separate Express server.

## Stack

- Next.js App Router + React + TypeScript
- MongoDB Node.js driver
- Next.js Route Handlers for the API

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and add your MongoDB Atlas or local MongoDB connection string:

   ```env
   MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
   MONGODB_DB=impera
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

To create or update the MongoDB collections, validators, and indexes manually, run:

```bash
npm run db:init
```

## API routes

- `POST /api/waitlist` stores or updates a waitlist entry by email.
- `POST /api/contact` stores a contact message.
- `GET /api/health` checks the MongoDB connection.

MongoDB indexes are created automatically on first use. Waitlist email addresses are unique.

## Production

```bash
npm run build
npm start
```
