import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../config";
import { Button, Card, CardContent } from "@mui/material";
import "./chat.css";

const Chat = () => {
  const url = app_config.api_url;
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [message, setMessage] = useState("");

  const [messageList, setMessageList] = useState([
    // { text: "Kon sa exam hai kal", sent: true },
    // { text: "Compiler Designer, syllabus batao iska", sent: false },
    // { text: "kal pata chalega jab exam denge 😎😎", sent: true },
    // { text: "bye bye Good Night!!", sent: true },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  // subscribing the event
  socket.on("recmsg", (data) => {
    console.log(data);
    setMessageList([...messageList, data]);
  });

  const displayMessages = () => {
    return messageList.map((obj) => (
      <div
        className={
          obj.sent ? "message-sent message-box" : "message-recieved message-box"
        }
      >
        <p className="message-text">{obj.text}</p>
      </div>
    ));
  };

  const sendMessage = () => {
    // emit is used for sending the event
    let obj = { text: message, sent: true };
    socket.emit("sendmsg", obj);

    setMessageList([...messageList, obj]);
    setMessage("");
  };

  return (
    <div className="container">
      <Card className="chat-card">
        <CardContent>
          <div className="chat-area">{displayMessages()}</div>

          <div className="input-group">
            <input
              className="form-control"
              placeholder="Type Your Message Here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <Button variant="contained" onClick={sendMessage}>
              Send &nbsp; <i className="fas fa-paper-plane"></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chat;