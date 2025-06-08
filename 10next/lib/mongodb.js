import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error("please definr mogono url");
}

let cached=global.mongoose
if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}


async function connecttoDatabase() {
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts={
            bufferCommands:false
        }
        cached.promise=mongoose.connect(process.env.MONGODB_URI,opts)
            .then((mongoose)=>{
                return mongoose
            })
    }

    try {
        cached.conn=await cached.promise
    } catch (e) {
        cached.promise=null
        
    }
    return cached.conn
    
}

export default connecttoDatabase