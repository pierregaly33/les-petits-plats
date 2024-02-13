function displayRecipes(recettes) {
    const mainCards = document.querySelector(".main_cards");
    mainCards.innerHTML = "";

    recettes.forEach((recipe) => {
        const domRecipe = getRecipeDom(recipe);
        mainCards.appendChild(domRecipe);
    });
}

function init() {
    displayRecipes(recipes);
}
init();
