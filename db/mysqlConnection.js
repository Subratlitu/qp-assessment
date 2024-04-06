const mysql = require('mysql2');

 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'litu1234',
  database: 'my_database',
});

 connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL...');
  
   connection.query('CREATE TABLE IF NOT EXISTS grocery_items (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL, inventory INT NOT NULL)', (err, result) => {
    if (err) {
      console.error('Error creating grocery_items table:', err);
    } else {
      console.log('Grocery_items table created or already exists...');
    }
  });
});

module.exports = connection.promise();
