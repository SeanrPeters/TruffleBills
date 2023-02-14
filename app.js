const express = require("express");
const app = express(); // ensuring an express.js instance
const bodyParser = require("body-parser"); // library to check body for correctness
        
app.use(bodyParser.json());// Ensures that bodyParser.json() will be used as the middleware when parsing requests

let bills = []; //simple array used to store clients information

//making the get endpoint
app.get("/items", (req, res) => { // req, res -> objects used for requests and response, respectively
  res.json(bills); //provides the response using 'bills' for the clients
});
//Providing a post endpoint which is needed to make a new item at '/items'
app.post("/items", (req, res) => {
  let bill = req.body; 
  if (                              //Enforces a proper input from client
    bill.hasOwnProperty("name") &&
    bill.hasOwnProperty("date")  &&
    bill.hasOwnProperty("address")&&
    bill.hasOwnProperty("hospital") &&
    bill.hasOwnProperty("amount")
  ) 
  {                // sends the client's input, 'bill', to the data structure, 'bills'
    bills.push(bill);
                  // response for the bill
    res.json(bill);
  } 
 else             // else statements used to send an error code when the client's input is invalid
    res.send("Error: Your JSON request is invalid");
});
                //Ensures that the program is running on the proper host
app.listen(3000, () => { console.log(JSON.stringify("Running on port 3000! Link: http://localhost:3000/items"));});
