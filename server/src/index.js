import "dotenv/config";
import { app } from "./app.js";
import { MongoConnect } from "./db/index.js";

const port = process.env.PORT || 4000;



MongoConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `♦️♦️ Zidio E-Commerce web application running on  http://localhost:${port} ♦️♦️ `
      );
    });
  })
  .catch((error) => {
    console.error("MONGO CONNECTION ERROR !!! ", error);
  });
