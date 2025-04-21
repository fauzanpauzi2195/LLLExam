import { Sequelize } from 'sequelize';
import basicRoutes from './routes/4a'; 
import intermediateRoutes from './routes/4b';
import advancedRoutes from './routes/4c';
import dbConfig from './config/database'
import authorization from './routes/authRoutes'

const express = require('express')
const sequelize = new Sequelize(dbConfig);
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', basicRoutes);
app.use('/api/4b', intermediateRoutes);
app.use('/api/4c', advancedRoutes);
app.use('/api/auth', authorization);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));