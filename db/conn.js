const mongoose = require("mongoose");

// const DB = process.env.DATABASE
const DB = "mongodb+srv://angad:Angad1234@cluster0.5xl6h.mongodb.net/donorDB?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})//.then(() => console.log("DataBase Connected")).catch((errr) => {
   // console.log(errr);
//})