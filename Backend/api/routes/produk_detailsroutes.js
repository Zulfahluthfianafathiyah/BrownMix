const express = require("express");
const router = express.Router();
const {
  createProductDetail,
  getProductDetail,
  getProductDetailId,
  updateProductDetail,
  deleteProductDetail,
} = require("../controller/produk_detailscontroller");
require("../controller/produk_detailscontroller");
require("../controller/productcontroller");


router.post("/", createProductDetail);
router.get("/", getProductDetail);
router.get("/:id", getProductDetailId);
router.put("/:id", updateProductDetail);
router.delete("/:id", deleteProductDetail);



module.exports = router;
