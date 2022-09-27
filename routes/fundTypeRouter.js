const express = require("express");
const fundTypeRouter = new express.Router();
const fundTypeModel = require("../models/fundTypeSchema");

// for fund Type post
fundTypeRouter.post("/fundTypePost", async (req, res) => {
  try {
    const b = new fundTypeModel(req.body)
    await b.save()
    res.status(200).json({status: 201})
  } catch (error) {
    res.status(422).json(error);
  }
})

// for fund Type get
fundTypeRouter.get("/fundTypeGet", async (req, res) => {
  try {
    const funder = await fundTypeModel.find();
    res.json(funder);
  } catch (error) {
    res.json({ message: error });
  }
})

module.exports =fundTypeRouter;