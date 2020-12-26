const mongo = require("mongodb").MongoClient;
const assert = require("assert");
const dboper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

mongo.connect(url, (err, client) => {
  assert.strictEqual(err, null);
  console.log("Подключился к серверу");
  const db = client.db(dbname);
  dboper.insertDocument(db,{ name: "Vadonut", description: "Test" },"dishes",(result) => {
      console.log("Вставил в документ:\n", result.ops);
      dboper.findDocuments(db, "dishes", (docs) => {
        console.log("Найдено:\n", docs);
        dboper.updateDocument(
          db,
          { name: "Vadonut" },
          { description: "Updated Test" },
          "dishes",
          (result) => {
            console.log("Обновил документ:\n", result.result);
            dboper.findDocuments(db, "dishes", (docs) => {
              console.log("Найдено обновленны документов:\n", docs);
              db.dropCollection("dishes", (result) => {
                console.log("Dropped Collection: ", result);
                client.close();
              });
            });
          }
        );
      });
    }
  );
});
