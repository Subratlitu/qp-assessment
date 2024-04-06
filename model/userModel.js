const connection = require('../db/mysqlConnection');

const User = {
  getGroceryItems: async () => {
    try {
      const [results, fields] = await connection.execute('SELECT * FROM grocery_items');
      return results;
    } catch (error) {
      throw error;
    }
  },

 };

module.exports = User;
