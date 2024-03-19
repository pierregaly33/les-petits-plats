function affichageRecettesFiltres() {
    const searchBar = document.querySelector(".search_input");
    searchBar.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
            filtreParTag();
            return;
        }
        const tagCreer = document.querySelectorAll(".tag");
        tableauVide = [];
        tagCreer.forEach((element) => {
            tableauVide.push(element.textContent);
        });
        tableauVide.push(e.target.value);
        let filteredRecipes = filterRecipe(tableauVide);

        displayRecipes(filteredRecipes);

        let ingredientFiltered = getIngredient(filteredRecipes);
        let appareilFiltered = getAppareils(filteredRecipes);
        let ustensilFiltered = getUstensile(filteredRecipes);

        dropdownIngredient.updateDropdown(ingredientFiltered);
        dropdownAppareil.updateDropdown(appareilFiltered);
        dropdownUstensil.updateDropdown(ustensilFiltered);
    });
}

function filterRecipe(tableauString) {
    let recettes = recipes;
    for (let e of tableauString) {
        const element = e.toLowerCase();
        recettes = recettes.filter(
            (recipe) =>
                recipe.name.toLowerCase().includes(element) ||
                recipe.description.toLowerCase().includes(element) ||
                recipe.ustensils.map((ustensil) => ustensil.toLowerCase()).includes(element) ||
                recipe.ingredients.map((ingredients) => ingredients.ingredient.toLowerCase()).includes(element)
        );
    }
    return recettes;
}

affichageRecettesFiltres();
