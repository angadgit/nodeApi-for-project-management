const express = require("express");
const recepitRouter = new express.Router();
const RecepitModel = require("../models/recepitSchema");


// for funder get
recepitRouter.get("/recepitGet", async (req, res) => {
  try {
    const recepitGet = await RecepitModel.find();
    res.json(recepitGet);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder user get
recepitRouter.get("/recepitUserGet/:id", async (req, res) => {
  // console.log(req.params.id)
  try {
    const recepitOneId = await RecepitModel.findByIdAndUpdate(req.params.id);
    res.json(recepitOneId);
    // res.status(200).json(recepitOneId);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder user get
recepitRouter.put("/recepitUserUpdate/:id", async (req, res) => {
  console.log(req.params.id)
  try {
    const b = req.body;
    const updatedReceipt = await RecepitModel.findByIdAndUpdate(
      { _id: req.params.id }, b
    );
    res.json(updatedReceipt);
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder post
recepitRouter.post("/recepitPost", async (req, res) => {
  console.log(req.body)
  try {
    const b = new RecepitModel(req.body)
    await b.save()
    res.status(200).json({ success: "Success" })
  } catch (error) {
    res.json({ message: error });
  }
})

// for funder Delete
recepitRouter.delete("/recepitRemove/:id", async (req, res) => {
  // console.log(req.params.id)
  try {
    const removeFunder = await RecepitModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 201, removeFunder });
  } catch (error) {
    res.json({ message: error });
  }
})

module.exports = recepitRouter;