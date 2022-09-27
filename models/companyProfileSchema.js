const mongoose = require("mongoose");

const CompanyProfileSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    logoUrl: { type: String },
    companyName: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    pin: { type: Number },
    contactNo: { type: Number },
    email: { type: String },
    pan: { type: String },
    twelveG: { type: String },
    eightyG: { type: String },
    organizationType: { type: String },
    organizationRegistrationNo: { type: String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Company Profile", CompanyProfileSchema);
// export default mongoose.models.Funder || mongoose.model("Funder", FunderSchema);
