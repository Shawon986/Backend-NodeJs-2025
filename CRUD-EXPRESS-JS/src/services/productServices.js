const { v4: uuidv4 } = require("uuid");
const { NotFoundError } = require("../error");
const { Product } = require("../Model");

//Products data
const products = [
  {
    _id: "111",
    name: "16 pro max",
    brand: "iphone",
    price: "8500 rmb",
  },
  {
    _id: "222",
    name: "14 pro max",
    brand: "iphone",
    price: "5500 rmb",
  },
];

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
} 

const createNewProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

const updateProduct = async(id, product) => {
    return await Product
    .findByIdAndUpdate({_id: id}, product);
};

const deleteProduct = (id) => {
  let updateProductIndex = products.findIndex((product) => product._id === id);
  if (updateProductIndex === -1) {
    throw new NotFoundError(`There is no product with this id: ${id}`);
  }
  products.splice(updateProductIndex, 1);
  return true;
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
