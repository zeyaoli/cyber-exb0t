const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 8080;
const router = require("./router");

const app = express();
const server = app.listen(port, () => {
  console.log(`Listening on server ${port}`);
});
const io = socketIo(server);
app.use(cors());
app.use(router);

// console.log("./service_account.json");

//init google dialogflow node client
const projectId = "cybersexbot2-btqa";
const dialogflow = require("@google-cloud/dialogflow");
const { v4: uuidv4 } = require("uuid");
const sessionId = uuidv4();
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "./service_account.json",
});
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

io.on("connect", (socket) => {
  console.log(`${socket.id} is connected`);
  //   socket.emit("whatever", { city: "manhattan" });
  socket.on("userInput", (data) => {
    console.log(`I said: "${data.transcript}"`);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: data.transcript,
          // The language used by the client (en-US)
          languageCode: "en-US",
        },
      },
    };
    //send request and log result
    sessionClient.detectIntent(request).then((responses) => {
      const result = responses[0].queryResult;
      console.log(result);

      let params = result.parameters.fields;
      let text = result.fulfillmentText;
      socket.emit("botOutput", { params, text });
    });
  });
});
