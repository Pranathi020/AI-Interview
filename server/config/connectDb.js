import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDb = async () => {
    try {
        // Fail fast in dev instead of "buffering timed out" after ~10s on first query
        mongoose.set("bufferCommands", false);

        const uri = process.env.MONGODB_URL;
        if (!uri) throw new Error("MONGODB_URL is missing in server/.env");

        try {
            await mongoose.connect(uri, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
            });
            console.log("DataBase Connected");
            return true;
        } catch (error) {
            console.log(`Original DataBase Error: ${error.message}`);
            console.log("Falling back to in-memory MongoDB...");
            
            const mongoServer = await MongoMemoryServer.create();
            const memoryUri = mongoServer.getUri();
            
            await mongoose.connect(memoryUri, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
            });
            
            console.log("In-memory DataBase Connected");
            return true;
        }
    } catch (error) {
        console.log(`Fallback DataBase Error ${error}`);
        return false;
    }
}

export default connectDb;