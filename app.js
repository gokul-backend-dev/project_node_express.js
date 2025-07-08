const express = require('express');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5001;

app.use(express.json());
app.use('/api/users', userRoutes);

app.get("/", (req, res) => res.json('My Api running---->'))
// Sync DB and start server
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database connected.');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
