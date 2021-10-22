const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// database
const uri =
  "mongodb+srv://sfirstDb:6Ppyx1F067W1SCL2@cluster0.qow90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     };
//     const result = await haiku.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

async function run() {
  try {
    await client.connect();
    const database = client.db("foodMaster");
    const userCollection = database.collection("users");
    // const user = {
    //   name: "Sanji",
    //   email: "sanjidakabir1203@gmail.com",
    // };
    // const result = await userCollection.insertOne(user);
    // console.log("insert sucess");
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);

    // post api
    app.post("/users", async (req, res) => {
      console.log("hitting the post", req.body);
      res.send("hit the post");
    });
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("running crud server");
});

app.listen(port, () => {
  console.log("running server on port", port);
});
