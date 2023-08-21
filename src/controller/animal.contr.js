import { Animals, Country } from "../models/index.js";

export default {
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            if (id) {
                return res.send(
                    await Animals.findOne({
                        id,
                        include: {
                            model: Country,
                            attributes: { exclude: ["create_at"] },
                            through: [],
                        },
                        attributes: ["id", "name", "color"],
                    })
                );
            }
            res.send(
                await Animals.findAll({
                    include: {
                        model: Country,
                        attributes: ["id", "area", "name"],
                        through: { attributes: [] },
                    },
                    attributes: ["name", "color"],
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    },
    POST: async (req, res) => {
        try {
            const animal = await Animals.create(req.body);
            res.send("ok");
        } catch (error) {
            console.log(error.message);
        }
    },
    DELETE: async (req, res) => {
        try {
            res.send(await Animals.findAll());
        } catch (error) {}
    },
};
