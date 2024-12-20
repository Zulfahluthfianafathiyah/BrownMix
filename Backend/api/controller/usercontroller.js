const { user } = require("../../models");
const loginValidation = require("../../validation/user");
require("dotenv/config");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createUser = async (req, res) => {
  try {
    const { errors } = loginValidation.validateCreatePayload(req.body);
    if (errors) {
      return res.status(400).json({ errors });
    }
    const { username, email, password, passwordConfirm } = req.body;
    if (password != passwordConfirm) {
      return res.status(400).json({
        message: "Password Tidak Sama",
      });
    }

    const cekEmail = await user.findOne({ where: { email: email } });
    if (cekEmail) {
      return res.status(400).json({
        errors: ["Email sudah terdaftar"],
      });
    }

    const User = await user.create({
      username,
      email,
      password,
    });

    const token = signToken(User.id);

    return res.status(201).json({
      message: "Registration Berhasil",
      user: User,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Registration Gagal",
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: "Gagal",
        message: "Login gagal ",
        errors: "Email dan Password wajib diisi",
      });
    }

    const userLogin = await user.findOne({ where: { email: req.body.email } });
    if (!userLogin || !(await userLogin.findPassword(req.body.password))) {
      return res.status(400).json({
        status: "Gagal",
        message: "Login gagal",
        errors:
          "Email atau password tidak ada silahkan melakukan login kembali",
      });
    }

    const token = signToken(userLogin.id);

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

module.exports = {
  createUser,
  userLogin,
};
