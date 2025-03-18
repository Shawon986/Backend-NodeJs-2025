const mongoose = require("mongoose");



const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: {type: String, required: true},
  comment: {type: String, required: true},

});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    brand: { type: String },
    quantity: { type: Number, required: true, default: 0 },
    categories: { type: String },
    metadata: {
      isFeatured : {type: Boolean, default: false}
    },
    reviews: [reviewSchema],
    deleted : { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;
