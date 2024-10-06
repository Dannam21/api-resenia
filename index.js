const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); // Esto importa la instancia de sequelize
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', reviewRoutes); // No necesitas pasar sequelize aquí

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Sincronizar modelos con la base de datos
sequelize.sync().then(() => {
    console.log('Database & tables created!');
}).catch(err => {
    console.error('Error syncing database:', err);
});
