import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({override: true});

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected...");
        
        const dbAdmin = mongoose.connection.db.admin();
        const ping = await dbAdmin.ping();
        console.log("Ping successful:", ping);
        
        process.exit(0);
    } catch(err) {
        console.error("DB Error:", err);
        process.exit(1);
    }
}

main();
