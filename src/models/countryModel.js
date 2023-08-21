import { sequelize } from "../utils/sequelize.js";
import { Op, DataTypes, Model } from "sequelize";
const Country = sequelize.define("country", {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    set(arg) {
      if (arg.length > 20) throw new Error("name uzunlik xato");
      this.setDataValue("name", arg + " shahar");
    },
  },
  area: {
    type: DataTypes.INTEGER,
    validate: {
      max: 1000000,
      min: 100000,
    },
  },
  language: {
    type: DataTypes.STRING(22),
  },
});

export { Country };
