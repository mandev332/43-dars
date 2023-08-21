import { Router } from "express";
import country from "../controller/country.contr.js";
export const countryRouter = new Router();

countryRouter
    .get("/country", country.GET)
    .get("/password/:pass", country.PASS)
    .get("/country/:id", country.GET)
    .post("/country", country.SEND)
    .delete("/country/:id", country.DELETE);
