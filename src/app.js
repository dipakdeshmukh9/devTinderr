const express = require("express");
const app = express();

app.use("/hello", (req , res) => {
    res.send("Hello hello hello");
});
app.use("/test", (req , res) => {
    res.send("Hell0 form the server");
});
app.use("/", (req , res) => {
    res.send("Hellp form the Dipak");
});
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});