function affichageRecettesFiltres() {
    const searchBar = document.querySelector(".search_input");
    searchBar.addEventListener("input", (e) => {
        let filteredRecipes = filterRecipe(e.target.value);
        displayRecipes(filteredRecipes);

        let ingredientFiltered = getIngredient(filteredRecipes);
        let appareilFiltered = getAppareils(filteredRecipes);
        let ustensilFiltered = getUstensile(filteredRecipes);

        dropdownIngredient.updateDropdown(ingredientFiltered);
        dropdownAppareil.updateDropdown(appareilFiltered);
        dropdownUstensil.updateDropdown(ustensilFiltered);
    });
}

function filterRecipe(text) {
    const element = text.toLowerCase();
    const newRecipes = recipes.filter(
        (recipe) => recipe.name.toLowerCase().includes(element) || recipe.description.toLowerCase().includes(element)
    );
    return newRecipes;
}

affichageRecettesFiltres();
