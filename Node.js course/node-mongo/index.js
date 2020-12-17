const mongo = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

mongo.connect(url, (err, client) => {
  assert.strictEqual(err, null);
  console.log("Connected to the server");
  const db = client.db(dbname);
  const collection = db.collection("dishes");
  collection.insertOne({ name: "Ilia", familia: "Skakov" }, (err, result) => {
    assert.strictEqual(err, null);
    console.log("after insert: \n");
    console.log(result.ops);
    collection.find({}).toArray((err, docs) => {
      assert.strictEqual(err, null);
      console.log("Found: \n");
      console.log(docs);
      db.dropCollection("dishes", (err,result) => {
        assert.strictEqual(err,null);
        client.close();
      })
    });
  });
});
