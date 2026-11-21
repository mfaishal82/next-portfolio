import { MongoClient, ServerApiVersion } from 'mongodb';

/**
 * Lazily create (and cache) the MongoDB client.
 *
 * This module is imported by `/api/projects`, and Next.js evaluates route
 * modules during `next build` while collecting page data. Building the client
 * at import time therefore crashed the production build with
 * `Cannot read properties of undefined (reading 'startsWith')` whenever
 * NEXT_PUBLIC_MONGODB_URI was not present in the build environment.
 *
 * The client is now created on first real use, and the connection string is
 * only validated at that point.
 */
const globalForMongo = globalThis;

function getUri() {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI || process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      'MongoDB URI is not configured (set NEXT_PUBLIC_MONGODB_URI). The legacy /api/projects route is unavailable.'
    );
  }
  return uri;
}

function getClient() {
  if (!globalForMongo.__mongoClientPromise) {
    const client = new MongoClient(getUri(), {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    globalForMongo.__mongoClientPromise = client.connect();
  }
  return globalForMongo.__mongoClientPromise;
}

/** Returns a connected Db handle. */
export async function connect() {
  const client = await getClient();
  return client.db();
}

export default connect;
