const itemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', itemsRef.length);

itemsRef.forEach(el => {
    const titleRef = el.querySelector('h2');
    const numberOfElRef = el.querySelectorAll('li');

    console.log(`Category:`, titleRef.textContent);
    console.log(`Elements:`, numberOfElRef.length);

});

