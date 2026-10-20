import { MongoClient, ServerApiVersion } from 'mongodb'

try {
  process.loadEnvFile('.env.local')
} catch {
  // Environment variables may already be provided by the hosting platform.
}

const uri = process.env.MONGODB_URI
const databaseName = process.env.MONGODB_DB || 'impera'

if (!uri) {
  throw new Error('MONGODB_URI is missing. Add it to .env.local before running npm run db:init.')
}

const client = new MongoClient(uri, {
  appName: 'impera-database-setup',
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const ensureCollection = async (database, name, validator) => {
  const exists = await database.listCollections({ name }, { nameOnly: true }).hasNext()

  if (!exists) {
    await database.createCollection(name, { validator, validationLevel: 'moderate' })
    return
  }

  await database.command({ collMod: name, validator, validationLevel: 'moderate' })
}

try {
  await client.connect()
  const database = client.db(databaseName)

  await ensureCollection(database, 'waitlist', {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email', 'createdAt', 'updatedAt', 'source'],
      properties: {
        name: { bsonType: 'string', minLength: 1, maxLength: 100 },
        email: { bsonType: 'string', minLength: 3, maxLength: 254 },
        company: { bsonType: 'string', maxLength: 160 },
        mobile: { bsonType: 'string', maxLength: 40 },
        source: { bsonType: 'string' },
        createdAt: { bsonType: 'date' },
        updatedAt: { bsonType: 'date' },
      },
    },
  })

  await ensureCollection(database, 'contacts', {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email', 'message', 'status', 'source', 'createdAt'],
      properties: {
        name: { bsonType: 'string', minLength: 1, maxLength: 100 },
        email: { bsonType: 'string', minLength: 3, maxLength: 254 },
        phone: { bsonType: 'string', maxLength: 40 },
        service: { bsonType: 'string', maxLength: 80 },
        message: { bsonType: 'string', minLength: 1, maxLength: 3000 },
        status: { enum: ['new', 'read', 'replied', 'archived'] },
        source: { bsonType: 'string' },
        createdAt: { bsonType: 'date' },
      },
    },
  })

  await Promise.all([
    database.collection('waitlist').createIndex({ email: 1 }, { unique: true, name: 'unique_waitlist_email' }),
    database.collection('waitlist').createIndex({ createdAt: -1 }, { name: 'waitlist_newest_first' }),
    database.collection('contacts').createIndex({ createdAt: -1 }, { name: 'contacts_newest_first' }),
    database.collection('contacts').createIndex({ status: 1, createdAt: -1 }, { name: 'contacts_by_status' }),
  ])

  await database.collection('app_meta').updateOne(
    { key: 'database' },
    { $set: { key: 'database', name: databaseName, initializedAt: new Date(), version: 1 } },
    { upsert: true },
  )

  const collections = await database.listCollections({}, { nameOnly: true }).toArray()
  console.log(`MongoDB database "${databaseName}" is ready.`)
  console.log(`Collections: ${collections.map(({ name }) => name).sort().join(', ')}`)
} finally {
  await client.close()
}
