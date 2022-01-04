const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});

const EmpModel = mongoose.model("employes", EmpSchema);

module.exports = EmpModel;