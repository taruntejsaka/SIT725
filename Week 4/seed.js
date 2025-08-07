const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "sit725";

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Hello There! I just wanted to say HI to you guys. See ya!"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Hello There! I just wanted to say HI to you guys. See ya!"
  }
];

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("projects");

    return collection.deleteMany({})
      .then(() => collection.insertMany(cardList))
      .then(() => {
        console.log("✅ Data seeded successfully");
        client.close();
      });
  })
  .catch(err => console.error("❌ Seeding failed:", err));
