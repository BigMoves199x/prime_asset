import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://FawazAroleDb:VE6saK8oOdITh23S@cluster0.xjyy75u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
;

if (!uri) {
  throw new Error("ATLAS_URI is not defined. Check your .env file.");
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("applicant");

export default db;