const { createAdmin, adminLogin, updateAdmin, deleteAdmin } = require('../controller/admincontroller');


const express = require('express');
const router = express.Router();


router.post('/RegistAdmin', createAdmin);
router.post('/loginAdmin', adminLogin);
router.put('/updateAdmin/:id', updateAdmin);
router.delete('/deleteAdmin/:id', deleteAdmin);



module.exports = router;