const express = require("express");
const companyProfileRouter = new express.Router();
const companyProfileModel = require("../models/companyProfileSchema");


const multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
});

const fileFilter=(req, file, cb)=>{
 if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
     cb(null,true);
 }else{
     cb(null, false);
 }

}

var upload = multer({ 
  storage:storage,
  limits:{
      fileSize: 1024 * 1024 * 5
  },
  fileFilter:fileFilter
});


// for companyProfile get
companyProfileRouter.get("/companyProfileGet", async (req, res) => {
  try {
    const companyProfile = await companyProfileModel.find();
    res.json(companyProfile);
  } catch (error) {
    res.json({ message: error });
  }
})

// for companyProfile user get
companyProfileRouter.get("/companyProfileUserGet", async (req, res) => {
  try {
    const companyProfile = await companyProfileModel.find();
    res.json(companyProfile);
  } catch (error) {
    res.json({ message: error });
  }
})

// for companyProfile post
companyProfileRouter.post("/companyProfilePost", async (req, res) => {
  try {
    const b = new companyProfileModel(req.body)
    await b.save()
    res.status(200).json({success: "Success"})
  } catch (error) {
    res.json({ message: error });
  }
})

// for companyProfile Delete
companyProfileRouter.delete("/companyProfileRemove/:id", async (req, res) => {
  // console.log(req.params.id)
  try {
    const removecompanyProfile = await companyProfileModel.findByIdAndDelete(req.params.id);
    res.status(200).json({status: 201 , removecompanyProfile});
  } catch (error) {
    res.json({ message: error });
  }
})

module.exports = companyProfileRouter;