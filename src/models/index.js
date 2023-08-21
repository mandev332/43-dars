import { sequelize } from "../utils/sequelize.js";
import { animalcountr } from "./animalCountryModel.js";
import { Animals } from "./animalsModel.js";
import { Country } from "./countryModel.js";

// Animals.hasOne(Country, { foreignKey: "anim_id" });
// Country.belongsTo(Animals, { foreignKey: "anim_id" });

Animals.belongsToMany(Country, { through: animalcountr });
Country.belongsToMany(Animals, { through: animalcountr });

await sequelize.sync();

// await Animals.bulkCreate([
//   {
//     name: "Mushuk",
//     color: "black",
//     eats: ["meat", "milk", "bread"],
//   },
//   {
//     name: "Ot",
//     color: "red",
//     eats: ["meat", "milk", "bread"],
//   },
//   {
//     name: "It",
//     color: "black",
//     eats: ["meat", "milk", "bread"],
//   },
//   {
//     name: "Ayiq",
//     color: "white",
//     type: "o'rmon",
//     eats: ["meat", "milk", "bread"],
//   },
//   {
//     name: "Mushuk",
//     color: "black",
//     type: "o'rmon",
//     eats: ["meat", "milk", "bread"],
//   },
// ]);

// Country.bulkCreate([
//   {
//     name: "Tashkent",
//     area: 112351,
//     language: "Uz",
//   },
//   {
//     name: "Buxoro",
//     area: 112351,
//     language: "Uz",
//   },
//   {
//     name: "Namangan",
//     area: 112351,
//     language: "Uz",
//   },
// ]);

// animalcountr.bulkCreate([
//   {
//     type: true,
//     animalId: 1,
//     countryId: 2,
//   },
//   {
//     type: true,
//     animalId: 2,
//     countryId: 1,
//   },
//   {
//     type: true,
//     animalId: 4,
//     countryId: 3,
//   },
//   {
//     type: true,
//     animalId: 5,
//     countryId: 2,
//   },
//   {
//     type: true,
//     animalId: 5,
//     countryId: 1,
//   },
// ]);

// await Country.bulkCreate

export { Animals, Country, animalcountr };
