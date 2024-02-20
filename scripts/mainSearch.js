let ingredientFiltered;
let ustensilFiltered;
function affichageRecettesFiltres() {
    const searchBar = document.querySelector(".search_input");
    searchBar.addEventListener("input", (e) => {
        let filteredRecipes = filterRecipe(e.target.value);
        displayRecipes(filteredRecipes);
        ingredientFiltered = getIngredient(filteredRecipes);
        getDropdownDomIngredient(ingredientFiltered);
        getDropdownDomAppareil(filteredRecipes);
        ustensilFiltered = getUstensile(filteredRecipes);
        getDropdownDomUstensile(ustensilFiltered);
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
