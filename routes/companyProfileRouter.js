const express = require("express");
const companyProfileRouter = new express.Router();
const companyProfileModel = require("../models/companyProfileSchema");

// for companyProfile get
companyProfileRouter.get("/companyProfileGet", async (req, res) => {
  try {
    const companyProfile = await companyProfileModel.find();
    res.json(companyProfile);
  } catch (error) {
    res.status(401).json(error);
  }
})

// for companyProfile user get
companyProfileRouter.get("/companyProfileUserGet", async (req, res) => {
  try {
    const companyProfile = await companyProfileModel.find();
    res.json(companyProfile);
  } catch (error) {
    res.status(401).json(error);
  }
})

// for companyProfile post
companyProfileRouter.post("/companyProfilePost", async (req, res) => {
  try {
    const b = new companyProfileModel(req.body)
    await b.save()
    res.status(200).json({ success: "Success" })
  } catch (error) {
    res.status(401).json(error);
  }
})

// for companyProfile Delete
companyProfileRouter.delete("/companyProfileRemove/:id", async (req, res) => {
  try {
    const removecompanyProfile = await companyProfileModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 201, removecompanyProfile });
  } catch (error) {
    res.status(401).json(error);
  }
})

module.exports = companyProfileRouter;