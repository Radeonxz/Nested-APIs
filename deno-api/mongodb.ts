import { MongoClient } from "https://deno.land/x/mongo@v0.11.0/mod.ts";

const mongodbUri = "mongodb://localhost:27017";
const client = new MongoClient();
client.connectWithUri(mongodbUri);

const db = client.database("notes");

export default db;
