import { sequelize } from "../utils/sequelize.js";
import { Op, DataTypes, Model } from "sequelize";
import { Country } from "./countryModel.js";

const Animals = sequelize.define(
    "animals",
    {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            set(arg) {
                if (arg.length > 20) throw new Error("name uzunlik xato");
                this.setDataValue("name", arg + " hayvon");
            },
        },
        color: {
            type: DataTypes.STRING(15),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 10],
                    msg: "uzunlik xato",
                },

                check(arg) {
                    if (!["red", "black", "white"].includes(arg))
                        throw new Error("rang xato");
                },
            },
        },
        eats: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },

        type: {
            type: DataTypes.STRING(23),
            defaultValue: "uy",
        },
    },
    {
        freezeTableName: true,
        createdAt: "create_at",
        deletedAt: "delete_at",
    }
);

export { Animals };
