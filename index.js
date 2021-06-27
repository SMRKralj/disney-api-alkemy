//server
const express = require("express");
const app = express();
const morgan = require("morgan");
const apiRouter = require("./src/routes/api");


require("./data/db");

//settings
app.set("port", process.env.PORT || 3000);
//Middlewares

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRouter);

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
