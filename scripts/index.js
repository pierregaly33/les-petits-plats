const main = document.querySelector("main");
console.log(main);
recipes.forEach((recipe) => {
    const domRecipe = getRecipeDom(recipe);
    main.appendChild(domRecipe);
});
