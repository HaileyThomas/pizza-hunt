const { Schema, model } = require("mongoose");

// create pizza schema
const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

// create pizza model
const Pizza = model("Pizza", PizzaSchema);

// export pizza model
module.exports = Pizza;
