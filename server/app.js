const express = require('express');
const cors= require('cors');
const db=require('./models/')
const Routes = require("./routes/apiRoutes")
const PORT=process.env.PORT||3000;

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sequelize.sync().then(()=>{
    console.log("connected to db...");
    app.listen(PORT,()=>{
        console.log(`app running on http://localhost:${PORT}`);
    });
})

app.use("/api/todo",Routes);
app.get("/",(req,res)=>{
    res.send("welcome to the home page");
})





