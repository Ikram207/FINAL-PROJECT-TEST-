// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Connexion centralisée
const tasksRouter = require('./routes/taskRoutes');

dotenv.config(); // Charge les variables d'environnement

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/tasks', tasksRouter);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur lancé sur le port ${PORT}`));