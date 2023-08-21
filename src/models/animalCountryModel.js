import { sequelize } from "../utils/sequelize.js";
import { DataTypes } from "sequelize";
const animalcountr = sequelize.define(
    "animalcountr",
    {
        type: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        freezeTableName: true,
    }
);

export { animalcountr };
