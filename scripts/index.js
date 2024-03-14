function displayRecipes(recettes) {
    const mainCards = document.querySelector(".main_cards");
    mainCards.innerHTML = "";

    if (recettes.length == 0) {
        let div = document.createElement("div");
        mainCards.appendChild(div);
        div.textContent = "Recette Introuvable";
    }
    recettes.forEach((recipe) => {
        const domRecipe = getRecipeDom(recipe);
        mainCards.appendChild(domRecipe);
    });
}

function init() {
    displayRecipes(recipes);
}
init();
