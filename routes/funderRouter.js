const express = require("express");
const funderRouter = new express.Router();
const funderModel = require("../models/funderSchema");


// for funder get
funderRouter.get("/funderGet", async (req, res) => {
  try {
    const funder = await funderModel.find();
    res.json(funder);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder user get
funderRouter.get("/funderUserGet/:id", async (req, res) => {
  console.log(req.params.id)
  try {
    const funder = await funderModel.findByIdAndUpdate(req.params.id);
    res.json(funder);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder post
funderRouter.post("/funderPost", async (req, res) => {
  try {
    const b = new funderModel(req.body)
    await b.save()
    res.status(200).json({status: 201})
  } catch (error) {
    res.status(422).json(error);
  }
})


// for funder user get
funderRouter.put("/funderUserUpdate/:id", async (req, res) => {
  console.log(req.params.id)
  try {
    const b = req.body;
    const updatedFunder = await funderModel.findByIdAndUpdate(
      { _id: req.params.id }, b
    );
    res.json(updatedFunder);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder Delete
funderRouter.delete("/funderRemove/:id", async (req, res) => {
  // console.log(req.params.id)
  try {
    const removeFunder = await funderModel.findByIdAndDelete(req.params.id);
    res.status(200).json({status: 201 , removeFunder});
  } catch (error) {
    res.json({ message: error });
  }
})

module.exports = funderRouter;