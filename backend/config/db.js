const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "challenge_tcit",
  database: process.env.POSTGRES_DB || "posts_db",
  host: process.env.DB_HOST || "localhost",
  port: process.env.POSTGRES_PORT || 5432,
  dialect: "postgres",
  logging: (msg) => {
    console.log(`[Database] ${new Date().toISOString()}: ${msg}`);
  },
  dialectOptions: {
    connectTimeout: 60000
  }
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
    await sequelize.sync({ alter: true });
    console.log("Base de datos sincronizada");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
    throw error;
  }
};

module.exports = { sequelize, connectDB };
