var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/getRecipe", async (req, res) => {
  const recipe = await axios.get(
    `https://api.spoonacular.com/recipes/${req.query.id}/information`,
    {
      params: {
        includeNutrition: false,
        apiKey: process.env.spooncular_apiKey
      }
    }
  );
  res.send({ data: recipe.data });
});

router.get("/search", async (req, res) => {});

router.get("/addRecipe", async (req, res) => {});

module.exports = router;
