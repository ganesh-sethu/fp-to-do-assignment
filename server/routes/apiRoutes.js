const express = require('express');
const router=express.Router();
const db=require('../models');

router.get("/",(req, res) => {
    db.Todo.findAll().then(todos=>res.json(todos));
})

router.post("/",(req, res) => {
    db.Todo.create({name:req.body.name,id:req.body.id,status:req.body.status}).then(todos=>res.json(todos));
})


router.delete("/:id", (req, res) => {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
        console.log("to do item deleted");
        res.sendStatus(200)});
  });
  
  

module.exports=router;