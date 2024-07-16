import express from "express";
import ejs from "ejs";

const app = express();

app.get("/",(req,res)=>{
const data = {
    title:"EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple","banana","carrot","orange","tomato"],
    htmlContent : "<em> This is some em text </em>"
};
res.render("index.ejs", data);
});

app.listen(3000,(req,res)=>{
    console.log("Listening to 3000 .");
});