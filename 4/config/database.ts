import { Options } from 'sequelize';

const databaseConfig: Options = {
  dialect: 'mysql',
  host: process.env.DB_HOST ?? 'db',
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'password',
  database: process.env.DB_NAME ?? 'examlll',
  define: {
    timestamps: true
  },
  retry: {
    max: 5,
    timeout: 30000,
    match: [
      'ECONNREFUSED',
      'ETIMEDOUT'
    ]
  }
};

export default databaseConfig;