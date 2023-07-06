const express = require("express");
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const model = require("./models")
const routes = require("./routes")
const volleyball = require('volleyball');

const app = express();
const PORT = process.env.PORT || 3001;
const ORIGIN = process.env.ORIGIN || "http://localhost:5173";
const corsOptions = {
  credentials: true,
  origin: ORIGIN,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(volleyball);
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
});
