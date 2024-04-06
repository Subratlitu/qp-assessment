const Admin = require('../model/adminModel');

const adminController = {
  addGroceryItem: async (req, res) => {
    try {
       const itemId = await Admin.addGroceryItem(req.body);
       return res.status(201).json({ message: 'Grocery item added successfully', itemId });
    } catch (error) {
      console.log(error,"..........")
      res.status(500).json({ error: error.message });
    }
  },

  getGroceryItems: async (req, res) => {
    try {
      const items = await Admin.getGroceryItems();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  removeGroceryItem: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      await Admin.removeGroceryItem(itemId);
      res.status(200).json({ message: 'Grocery item removed successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGroceryItem: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      await Admin.updateGroceryItem(itemId, req.body);
      res.status(200).json({ message: 'Grocery item updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  manageInventory: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      const newInventory = req.body.inventory;
      await Admin.manageInventory(itemId, newInventory);
      res.status(200).json({ message: 'Inventory managed successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

};

module.exports = adminController;
