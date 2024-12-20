
const { user, admin } = require("../models");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.substring(7);
    const payload = jwt.verify(token, process.env.JWT_KEY_SECRET);
    const userAuth = await user.findByPk(payload.id);
    if (!userAuth) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = userAuth;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.substring(7);
    const payload = jwt.verify(token, process.env.JWT_KEY_SECRET);
    const adminAuth = await admin.findByPk(payload.id);
    if (!adminAuth) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.admin = adminAuth;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authenticateUser, authenticateAdmin };
