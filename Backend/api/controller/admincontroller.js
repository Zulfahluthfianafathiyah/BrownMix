
const { admin } = require("../../models");
const adminValidation = require("../../validation/admin");
require("dotenv/config");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAdmin = async (req, res) => {
  try {
    const { errors } = adminValidation.validateCreatePayload(req.body);
    if (errors) {
      return res.status(400).json({ errors });
    }
    const { username, email, password, full_name } = req.body;

    const cekEmail = await admin.findOne({ where: { email: email } });
    if (cekEmail) {
      return res.status(400).json({
        errors: ["Email sudah terdaftar"],
      });
    }

    const Admin = await admin.create({
      username,
      email,
      password,
      full_name,
    });

    const token = signToken(Admin.admin_id);

    return res.status(201).json({
      message: "Registration Berhasil",
      admin: Admin,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Registration Gagal",
      error: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: "Gagal",
        message: "Login gagal ",
        errors: "Email dan Password wajib diisi",
      });
    }

    const adminLogin = await admin.findOne({
      where: { email: req.body.email },
    });
    if (
      !adminLogin ||
      !(await adminLogin.validPassword(req.body.password))
    ) {
      return res.status(400).json({
        status: "Gagal",
        message: "Login gagal",
        errors:
          "Email atau password tidak ada silahkan melakukan login kembali",
      });
    }
    const token = signToken(adminLogin.admin_id);

    return res.status(200).json({
      status: "Sukses",
      message: "Berhasil login",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Terjadi kesalahan server",
      errors: error.message,
    });
  }
};

const updateAdmin = async (req, res) => {
  const { username, email, password, full_name } = req.body;
  try {
    const adminUpdate = await admin.update(
      {
        username,
        email,
        password,
        full_name,
      },
      {
        where: {
          admin_id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: "Admin updated successfully",
      admin: adminUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await admin.destroy({
      where: {
        admin_id: id,
      },
    });
    return res.status(200).json({
      message: "Admin deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


module.exports = {
  createAdmin,
  adminLogin,
  updateAdmin,
  deleteAdmin,
};
