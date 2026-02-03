import { MongoClient, type Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME ?? 'unitots';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getDb(): Promise<Db> {
  if (!MONGODB_URI) throw new Error('MONGODB_URI is not set');
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(MONGODB_URI).connect();
  }
  return global._mongoClientPromise.then((client) => client.db(DB_NAME));
}
