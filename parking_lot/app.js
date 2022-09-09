const express = require("express");
const app = express();
const connect = require('./src/config/db')
const userController = require('./src/controllers/userController')
const floorController = require('./src/controllers/floorController')
const spotController = require('./src/controllers/spotController')
const ticketController = require('./src/controllers/ticketController')

app.use(express.json())
app.use("/user", userController);
app.use("/floor", floorController);
app.use("/spot", spotController);
app.use("/ticket", ticketController)


const port = process.env.PORT || 3000;

const start = async () => {
  try {  
      await connect()   
      app.listen(port, () => {
        console.log(`Listening on Port ${port}`);
      });    
  } catch (err) {
    console.log({ Error: err.message });
  }
};
start()