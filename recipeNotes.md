Database Notes:
***child needs info on parent but parent doesn't need info about child***
Tables:
- Dishes- like a cookbook chapter
  - name
- Recipes
  - name, dish_id = dish.id, instructions, 
- Ingredients
  - name
- Units of measure- independent?
  - name = cup, pint, tbsp
  - count = floating point number
- Ingredient_units: Table to combine ingredients and units
- recipe_ingredients: Table to combine ingredient_units and recipes

Other notes:
- Dish can have many recipes
- Recipes only belong to one dish
- Ingredients go in many recipes
- Ingredients should be floating point numbers
- Recipes have many ingredients
- Need a way to save instructions for recipe
- Need a way to print a shopping list

db plan diagram: https://dbdiagram.io/d/5cb35f2df7c5bb70c72fa055
