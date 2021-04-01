cost mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema(
    {
      name: String,
      description: String,
      ingredients: Array,
      instructions: Array,
      images: Array,
    }

)