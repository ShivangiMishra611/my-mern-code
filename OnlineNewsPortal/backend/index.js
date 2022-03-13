const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const newsRouter = require("./routers/newsRouter");
const reporterRouter = require("./routers/reporterRouter");

const managerRouter = require("./routers/managerRouter");


const utilRouter = require("./routers/utils");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/news", newsRouter);
app.use("/reporter", reporterRouter);
pp.use("/reporter", managerRouter);

// app.use("/reporter", reporterRouter);

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

io.on("connection", (socket) => {
  console.log("client connected");

  // on function is used for receieving the event
  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;

    socket.broadcast.emit("recmsg", data);
  });
});

app.use(express.static("./uploads"));



httpServer.listen(port, () => {
  console.log("server started");
});
3