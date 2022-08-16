const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = new Schema(
  {
    id: { type: String },
    userId: { type: String },
    date: { type: Number },
    address: { type: String },
    phone: { type: String },
    products: { type: Array },
    status: { type: Number },
    shipDate: { type: Number },
  },
  { collection: "order" }
);

module.exports = mongoose.model("order", Order);
