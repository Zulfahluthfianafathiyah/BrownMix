const { produk_details} = require("../../models");
const path = require("path");
const fs = require("fs");

const createProductDetail = async (req, res) => {
  const { produk_id, admin_id, varian_rasa, bentuk, deskripsi } = req.body;
  try {
    const productDetailCreate = await produk_details.create({
      produk_id,
      admin_id,
      varian_rasa,
      bentuk,
      deskripsi,
    });
    return res.status(201).json({
      message: "Product Detail created successfully",
      productDetail: productDetailCreate,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const productDetails = await produk_details.findAll();
    res.status(200).json({
      productDetails,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getProductDetailId = async (req, res) => {
  try {
    const product_id = req.params.id; 
    const productDetailsId = await produk_details.findOne({
      where: {
        produk_id: product_id, 
      },
    });  
    if (productDetailsId) {
      res.status(200).json({
        productDetails: productDetailsId,
        product_id: parseInt(product_id),  
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



const updateProductDetail = async (req, res) => {
const { produk_id,admin_id,varian_rasa,bentuk,deskripsi,} = req.body;
try { const productDetailUpdate = await produk_details.update(
  {produk_id,admin_id,varian_rasa,bentuk,deskripsi,
},
  {
    where: {
      id: req.params.id,
    },
  }
);
return res.status(200).json({
  message: "Product Detail updated successfully",
  productDetail: productDetailUpdate,
});
}catch (error) {
  return res.status(400).json({ message: error.message });
}
}

const deleteProductDetail = async (req, res) => {
  try {
    const id = req.params.id;
    await produk_details.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Product Detail deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};



module.exports = {
  createProductDetail,
  getProductDetail,
  getProductDetailId,
  updateProductDetail,
  deleteProductDetail,
};
