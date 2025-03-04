const { v4: uuidv4 } = require("uuid");

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

const getAllProducts = () => products;

const createNewProduct = (productData) => {
  const newProduct = { _id: uuidv4(), ...productData };
  products.push(newProduct);
  return newProduct;
};

const updateProduct = (id, product) => {
  let updateProductIndex = products.findIndex((product) => product._id === id);
  if (updateProductIndex === -1) {
    throw new Error(`There is no product with this id: ${id}`);
  }
  products[updateProductIndex] = {
    ...products[updateProductIndex],
    ...product,
  };
  return products[updateProductIndex];
};

const deleteProduct = (id) => {
  let updateProductIndex = products.findIndex((product) => product._id === id);
  if (updateProductIndex === -1) {
    throw new Error(`There is no product with this id: ${id}`);
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
