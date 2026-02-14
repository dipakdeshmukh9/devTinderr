const express = require("express");
const app = express();

app.get("/user", (req , res) => {
    res.send({firstName: "Dipak", lastName: "Deshmukh"});
});
app.post("/user", (req , res) => {
    res.send("data successfully added to the database");
});
app.delete("/user", (req , res) => {
    res.send("data successfully deleted from the database");
});
app.use("/test", (req , res) => {
    res.send("Hell0 form the server");
});
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});