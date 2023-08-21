import sendMail from "../middlewares/sender.js";
import { Animals, Country } from "../models/index.js";
import sha256 from "sha256";
import fs from "fs";

export default {
    PASS: async (req, res) => {
        try {
            console.log(req.params.pass);
            let data = JSON.parse(fs.readFileSync("./password.json", "utf-8"));
            if (req.params.pass == data.pass) res.redirect("/animals");
            res.send({ status: 429, message: "link xato" });
        } catch (error) {
            console.log(error.message);
        }
    },
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            if (id) {
                return res.send(
                    await Country.findOne({
                        id,
                        include: {
                            model: Animals,
                        },
                    })
                );
            }
            res.send(
                await Country.findAll({
                    include: Animals,
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    },
    SEND: async (req, res) => {
        try {
            const { email, text } = req.body;
            const num = Math.floor(Math.random() * 9000 + 1000);
            await sendMail(email, text, sha256(num + ""));
            await fs.writeFileSync(
                "./password.json",
                JSON.stringify({ email, pass: sha256(num + "") })
            );
            res.send(email + " gmailga habar yuborildi ");
        } catch (error) {
            console.log(error.message);
        }
    },
    POST: async (req, res) => {
        try {
            console.log(result);
            const country = await Country.create(req.body);
            res.send("ok");
        } catch (error) {
            console.log(error.message);
        }
    },
    DELETE: async (req, res) => {
        try {
            res.send(await Country.findAll());
        } catch (error) {}
    },
};
