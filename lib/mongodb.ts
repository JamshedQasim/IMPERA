import { MongoClient, ServerApiVersion, type Db } from 'mongodb'

declare global {
  var imperaMongoClientPromise: Promise<MongoClient> | undefined
  var imperaMongoIndexesPromise: Promise<unknown> | undefined
}

const createClientPromise = () => {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not configured. Add it to .env.local before submitting forms.')
  }

  const client = new MongoClient(uri, {
    appName: 'impera-next',
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })

  return client.connect()
}

export const getMongoClient = () => {
  if (process.env.NODE_ENV === 'development') {
    global.imperaMongoClientPromise ??= createClientPromise()
    return global.imperaMongoClientPromise
  }

  global.imperaMongoClientPromise ??= createClientPromise()
  return global.imperaMongoClientPromise
}

export const getDatabase = async (): Promise<Db> => {
  const client = await getMongoClient()
  return client.db(process.env.MONGODB_DB || 'impera')
}

export const ensureDatabaseIndexes = async () => {
  if (!global.imperaMongoIndexesPromise) {
    global.imperaMongoIndexesPromise = getDatabase()
      .then((database) => Promise.all([
        database.collection('waitlist').createIndex({ email: 1 }, { unique: true, name: 'unique_waitlist_email' }),
        database.collection('waitlist').createIndex({ createdAt: -1 }, { name: 'waitlist_newest_first' }),
        database.collection('contacts').createIndex({ createdAt: -1 }, { name: 'contacts_newest_first' }),
        database.collection('contacts').createIndex({ status: 1, createdAt: -1 }, { name: 'contacts_by_status' }),
      ]))
      .catch((error) => {
        global.imperaMongoIndexesPromise = undefined
        throw error
      })
  }

  return global.imperaMongoIndexesPromise
}
