import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? 'examlll',
  process.env.DB_USER ?? 'root',
  process.env.DB_PASSWORD ?? 'password',
  {
    host: 'mysql',
    port: parseInt(process.env.DB_PORT ?? '3306'),
    dialect: 'mysql',
  }
);

export const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.FLOAT,
});

sequelize.sync();