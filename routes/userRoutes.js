const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/grocery-items', userController.getGroceryItems);

 
module.exports = router;
