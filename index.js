const express = require('express');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
