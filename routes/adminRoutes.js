const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.post('/add-grocery-item', adminController.addGroceryItem);
router.get('/grocery-items', adminController.getGroceryItems);
router.delete('/remove-grocery-item/:itemId', adminController.removeGroceryItem);
router.put('/update-grocery-item/:itemId', adminController.updateGroceryItem);
router.put('/manage-inventory/:itemId', adminController.manageInventory);
 
module.exports = router;
