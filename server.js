const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const songsRoute = require("./routes/songsRoute");
const adminRoute = require("./routes/adminRoute");
const cors = require("cors");

app.use("/api/users", userRoute);
app.use("/api/songs", songsRoute);
app.use("/api/admin", adminRoute);
app.use(cors());
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Node js server started at port ${port}!`));
