const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients');

const ingredient = ingredients.map(element => {
  const ingredientItemRef = document.createElement('li');
 
  ingredientItemRef.textContent = element;
  ingredientItemRef.classList.add('item');
  
  return ingredientItemRef });

  ingredientsListRef.append(...ingredient); 


// ingredients.map(element => {
//   const ingredientItemRef = document.createElement('li');
//   ingredientItemRef.textContent = element;
//   ingredientItemRef.classList.add('item');
//   ingredientsListRef.append(ingredientItemRef);
// });

