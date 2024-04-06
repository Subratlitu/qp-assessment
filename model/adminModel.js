const connection = require('../db/mysqlConnection');

const Admin = {
    addGroceryItem: async (item) => {
        try {
          const sql = 'INSERT INTO grocery_items (name, price, inventory) VALUES (?, ?, ?)';
          const values = [item.name, item.price, item.inventory];
          const [result] = await connection.execute(sql, values);
          if (result && result.insertId) {
            return result.insertId;
          } else {
            throw new Error('Failed to add grocery item');
          }
        } catch (error) {
          throw error;
        }
      },
      
      
  getGroceryItems: async () => {
    try {
      const [results, fields] = await connection.execute('SELECT * FROM grocery_items');
      return results;
    } catch (error) {
      throw error;
    }
  },
  removeGroceryItem: async (itemId) => {
    try {
      const [result] = await connection.execute('DELETE FROM grocery_items WHERE id = ?', [itemId]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  updateGroceryItem: async (itemId, updatedItem) => {
    try {
      const sql = 'UPDATE grocery_items SET name = ?, price = ? WHERE id = ?';
      const values = [updatedItem.name, updatedItem.price, itemId];
      const [result] = await connection.execute(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  },

  manageInventory: async (itemId, newInventory) => {
    try {
      const [result] = await connection.execute('UPDATE grocery_items SET inventory = ? WHERE id = ?', [newInventory, itemId]);
      return result;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = Admin;
