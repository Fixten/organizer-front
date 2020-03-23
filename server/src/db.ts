import mongoose from 'mongoose'

const host = 'localhost'

const URI = `mongodb://${encodeURIComponent('server')}:${encodeURIComponent(
  'ksadfmo62jjks'
)}@${host}:27017/organizer?authMechanism=SCRAM-SHA-256&authSource=organizer`

export async function mongooseConnect() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Mongoose connected')
  } catch (error) {
    console.log(`Mongoose connection failed: ${error}`)
    process.exit()
  }
}
