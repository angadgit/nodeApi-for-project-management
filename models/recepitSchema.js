const mongoose = require("mongoose");

const RecepitSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    funderName: { type: String },
    name: { type: String },
    pan: { type: String },
    receiptAmount: { type: Number },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pinCode: { type: Number },
    paymentType: { type: String },
    Depression: { type: String },
    typeFund: { type: String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Recepit", RecepitSchema);
// export default mongoose.models.Funder || mongoose.model("Funder", FunderSchema);
