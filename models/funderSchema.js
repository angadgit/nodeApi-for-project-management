const mongoose = require("mongoose");

const FunderSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    fname: { type: String },
    lname: { type: String },
    contactPerson: { type: String },
    contactNumber: { type: Number },
    email: { type: String },
    pan: { type: String },
    funderType: { type: String },
    funderCategory: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pinCode: { type: Number },
    nationality: { type: String }, //unique: true
    website: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Funder", FunderSchema);
// export default mongoose.models.Funder || mongoose.model("Funder", FunderSchema);
