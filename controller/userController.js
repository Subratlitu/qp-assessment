const User = require('../model/userModel');

const userController = {
  getGroceryItems: async (req, res) => {
    try {
      const items = await User.getGroceryItems();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

 };

module.exports = userController;
