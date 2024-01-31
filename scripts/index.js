function displayRecipes() {
    const main = document.querySelector("main");

    const mainCards = document.createElement("section");
    mainCards.setAttribute("class", "main_cards");
    main.appendChild(mainCards);

    console.log(main);
    recipes.forEach((recipe) => {
        const domRecipe = getRecipeDom(recipe);
        mainCards.appendChild(domRecipe);
    });
}

function init() {
    displayRecipes();
}
init();
