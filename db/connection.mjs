import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

try {
  sequelize.authenticate();
  console.log('Conectado ao banco de dados com sucesso.');
} catch (error) {
  console.log(`Erro ao conectar ao banco de dados: ${error}`);
}

export default sequelize;
