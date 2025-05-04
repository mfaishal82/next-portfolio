import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database;

async function connect() {
  if (!database) {
    await client.connect();
    database = client.db("Portfolio");
  }
  return database;
}

export { connect };
