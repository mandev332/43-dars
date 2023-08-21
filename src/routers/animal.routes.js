import { Router } from "express";
import animal from "../controller/animal.contr.js";
export const animalRouter = new Router();

animalRouter
    .get("/animals", animal.GET)
    .get("/animals/:id", animal.GET)
    .post("/animals", animal.POST)
    .delete("/animals/:id", animal.DELETE);
