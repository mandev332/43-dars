import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  database: "jfjjnkyy",
  password: "07jrhGtSmtGlL0_IesB_FWGpA7LyDDV2",
  username: "jfjjnkyy",
  host: "tiny.db.elephantsql.com",
  dialect: "postgres",
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection db");
} catch (error) {
  console.log("Disconnection db " + error.message);
}
