const { kritik_saran } = require("../../models");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");

const createKritikSaran = async (req, res) => {
  const { username, email, pesan } = req.body;
  try {
    const kritikSaranCreate = await kritik_saran.create({
      username,
      email,
      pesan,
    });
    return res.status(201).json({
      message: "Kritik Saran created successfully",
      kritikSaran: kritikSaranCreate,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getKritikSaran = async (req, res) => {
  try {
    const kritikSarans = await kritik_saran.findAll();
    res.status(200).json({
      kritikSarans,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createKritikSaran,
  getKritikSaran,
};
