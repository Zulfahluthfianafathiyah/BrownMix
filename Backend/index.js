const express = require("express");
const { authenticateUser, authenticateAdmin } = require("./middleware/authmiddleware");
const cors = require("cors");

//
const userRoutes = require("./api/routes/userroutes");
const adminRoutes = require("./api/routes/adminroutes");
const productRoutes = require("./api/routes/productroutes");
const produk_detailsRoutes = require("./api/routes/produk_detailsroutes");
const kritik_saranRoutes = require("./api/routes/kritik_saranroutes");

//

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/product", productRoutes);
app.use("/api/produk_details", produk_detailsRoutes);
app.use("/api/kritik_saran", kritik_saranRoutes);

app.use(authenticateUser);
app.use(authenticateAdmin);

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});



