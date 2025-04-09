"use server";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://sixtenturden:y4ama9p13L0nRai5@cluster0.ceiup0n.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getDB(dbName) {
    console.log("getDB")
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    return client.db(dbName);
  } catch (err) {
    // Ensures that the client will close when you finish/error
    console.log(err)
  }
}

export async function getCollection(collectionName) {
    console.log("getCollection")
    const db = await getDB("notes")
    if (db) return db.collection(collectionName)

    return(null)
}