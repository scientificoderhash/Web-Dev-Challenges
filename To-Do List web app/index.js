const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));

app.listen(port, (req, res) => {
    console.log(`server is working at port: ${port}`);
})

app.get("/", (req, res) => {
    res.render("index.ejs");
})