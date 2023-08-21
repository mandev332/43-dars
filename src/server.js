import express from "express";
import { animalRouter } from "./routers/animal.routes.js";
import { countryRouter } from "./routers/country.routes.js";
// import { sequelize } from "./models/model.js";
import "./utils/sequelize.js";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(animalRouter, countryRouter);
// app.use();

app.listen(PORT);

console.log("Server runn " + PORT);
