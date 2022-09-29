const express = require("express");

const app = express();

app.use(express.static("./statics"))

const port = process.env.PORT || 8081;

app.get("/",  (req, res) => {
    res.send("<h1>GET - Welcome to NodeJS + Express Server</h1>");
})
app.get("/hello",  (req, res) => {
    res.send("<h1>Hello express JS</h1>");
})


app.post("/",  (req, res) => {
    res.send("<h1>POST - Welcome to NodeJS + Express Server</h1>");
})

app.get("/user",(req,res) => {
    var user = {
        id: 1,
        first_name: "shakil",
        last_name: "miah"
    }

    res.setHeader("content-type","application/json")
        .status(200)
        .send(JSON.stringify(user))
    

})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
//path parameter
app.get("/student/:sid/:fnm/:lnm", (req,res)=>{
    const s = req.params
    var student_id = req.params.sid
    var first_name = s.fnm
    var last_name = s.lnm

    const newS = {
        student_id,
        first_name,
        last_name,
        full_name : `${first_name} ${last_name}`
    }
    res.json(newS)

    //res.send(JSON.stringify(req.params))
})
//query
app.get("/student", (req,res)=>{
    res.send(JSON.stringify(req.query))
})

app.post("/user/:fnm/:lnm", (req,res)=>{
    const u = req.params
    var fnm = u.fnm
    var lnm = u.lnm
    res.json({fnm,lnm});
})
