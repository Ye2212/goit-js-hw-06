const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);
ingredients.map(el => {
  const ingredientItemRef = document.createElement('li');
 
  ingredientItemRef.textContent = el;

  ingredientItemRef.classList.add('item');

  ingredientsListRef.append(ingredientItemRef);
  console.log(ingredientItemRef);
});
