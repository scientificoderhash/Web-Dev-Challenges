const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

let data = [
    {
        name : "Krishna",
        username : "raghav.5896@gmail.com",
        password : "1234"
    }
]

let categories = [
    
];

app.listen(port, (req, res) => {
    console.log(`server is working at port: ${port}`);
})

app.get("/", (req, res) => {
    res.render("guest.ejs");
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})

app.post("/user/sign-up", (req, res) => {
    let {name, username, password} = req.body;
    // console.log(req.body);
    data.push(req.body);
    data.forEach((e)=> {
        console.log(e);
    }) 
    res.redirect("/login");
})

app.post("/user/sign-in", (req, res) => {
    let {username, password} = req.body;
    let user = data.find((p) => p.username === username);
    res.redirect(`/user?name=${user.name}`)
})

app.get("/user", (req, res) => {
    let {name} = req.query;
    res.render("user.ejs", {name});
})

app.get("/user/new-grp", (req, res) => {

})