const express = require("express");
const routes = express.Router();
const contactFormModel = require("./model");
require("dotenv").config();

routes.post('/addForm',addForm);
async function addForm(req,res){
    console.log(req.body);
  
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

  module.exports=routes
  