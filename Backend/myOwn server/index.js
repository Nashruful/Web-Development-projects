import express from "express";

const application = express();

application.get("/" , (req,res) => {
    res.send("<h1>Ragnarok Online</h1>");
});
application.get("/get" , (req,res) => {
    res.send("<h1>Here you go</h1><p>Apple pie</p>");
});
application.get("/contact" , (req,res) => {
    res.send("<h1>Contact</h1><p>+966 55 882 9738</p>");
});
application.post("/register", (req,res)=>{
    res.sendStatus(201);
});
application.put("/user/azooz", (req,res)=>{
    res.sendStatus(200);
});
application.patch("/user/azooz", (req,res)=>{
    res.sendStatus(200);
});
application.delete("/user/azooz", (req,res)=>{
    res.sendStatus(200);
});

application.listen(4000, ()=>{
    console.log("Successufuly..");
});