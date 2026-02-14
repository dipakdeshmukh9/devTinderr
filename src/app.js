const express = require("express");
const app = express();

app.use("/user", (req , res , next) => {
    console.log("handling  a route user");
    next();
},
(req , res , next) => {
    console.log("handling  a route user 2");
    next();
},
(req , res , next) => {
    console.log("handling  a route user 3");
    next();
},
(req , res , next) => {
    console.log("handling  a route user 4");
    next();
},
(req , res) => {
 console.log("handing a 5th route");
 res.send("5th responce!!");
}
);
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});