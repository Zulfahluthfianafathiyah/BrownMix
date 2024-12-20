const { produk } = require("../../models");
const path = require("path");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    const { nama, harga, gambar, varian_rasa, bentuk, deskripsi } = req.body;
    const productCreate = await produk.create({
      nama,
      harga,
      gambar,
      varian_rasa,
      bentuk,
      deskripsi,
    });
    return res.status(201).json({
      message: "Product created successfully",
      product: productCreate,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await produk.findAll();
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    
    if (id) {
      
      const productById = await produk.findByPk(id);
      
      if (!productById) {
        return res.status(404).json({ message: 'Produk tidak ditemukan' });
      }

      return res.status(200).json({
        product: productById,
      });
    } else {

      const products = await produk.findAll();
      return res.status(200).json({
        products,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};


const updateProduct = async (req, res) => {
  const { nama, harga, gambar, varian_rasa, bentuk, deskripsi } = req.body;
  try {
    const productUpdate = await produk.update(
      {
        nama,
        harga,
        gambar,
        varian_rasa,
        bentuk,
        deskripsi,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: "Product updated successfully",
      product: productUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await produk.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
   
    
module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById
 
};
