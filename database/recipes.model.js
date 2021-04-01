const mongoose = require('mongoose');
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

const Recipes = mongoose.model('Recipes', recipeSchema);
module.exports = Recipes;