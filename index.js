const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/user-db");

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/users", userRouter);
app.listen(PORT, () => console.log(`Server Started PORT : ${PORT}`));
