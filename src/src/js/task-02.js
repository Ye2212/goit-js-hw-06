const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients');

const newIngredients = ingredients.map(element => {
  const ingredientItemRef = document.createElement('li');
 
  ingredientItemRef.textContent = element;
  ingredientItemRef.classList.add('item');
  
  return ingredientItemRef });

  ingredientsListRef.append(...newIngredients); 
