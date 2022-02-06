const express = require("express");
const routes = express.Router();
const contactFormModel = require("./model");
require("dotenv").config();

routes.post('/addForm',addForm);
async function addForm(req,res){
  
    const {name, email, phoneNumber,description} = req.body;
    await contactFormModel.create({ 
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      description:description,
    });
    
  return res.status(201).json({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    description:description,
  })
  }
  routes.get('/', async (req, res, ) => {
    let users=await contactFormModel.find({})
    
    res.status(200).json(users);
  });

  module.exports=routes
  