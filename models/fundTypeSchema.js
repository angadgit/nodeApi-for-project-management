const mongoose = require("mongoose");

const FundType = new mongoose.Schema(
  {
    user: { type: String, required: true },
    fundtType: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("FundType", FundType);
// export default mongoose.models.Funder || mongoose.model("Funder", FunderSchema);
