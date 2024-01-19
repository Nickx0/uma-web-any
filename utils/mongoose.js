import mongoose from 'mongoose';
const connection = mongoose.connection;
const connect = mongoose.connect;

const URI = process.env.MONGODB_URI;
const conn = {
    isConnected: false,
}


export async function connectDb(){
    if(conn.isConnected) return;

    const db = await connect(URI)
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}
connection.once('open',()=>{
    console.log('MongoDb Connected')
})
connection.once('error',()=>{
    console.log('MongoDb Error')
})