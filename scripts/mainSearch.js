function affichageRecettesFiltres() {
    const searchBar = document.querySelector(".search_input");
    searchBar.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
            filtreParTag();
            return;
        }
        const tagCreer = document.querySelectorAll(".tag");
        tableauVide = [];

        for (let i = 0; i < tagCreer.length; i++) {
            tag = tagCreer[i].textContent;
            tableauVide.push(tag);
        }

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
    if (tableauString.length === 0) {
        return recipes;
    }

    let tableau = [];
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let elementVerifie = true;
        for (let j = 0; j < tableauString.length; j++) {
            let texte = tableauString[j].toLowerCase();
            let descriptionOK = recipe.description.toLowerCase().includes(texte);
            let nameOK = recipe.name.toLowerCase().includes(texte);

            let nomUstensile = [];
            for (let k = 0; k < recipe.ustensils.length; k++) {
                let ustensile = recipe.ustensils[k];
                nomUstensile.push(ustensile.toLowerCase());
            }
            let ustensileOK = nomUstensile.includes(texte);

            let nomIngredients = [];
            for (let el = 0; el < recipe.ingredients.length; el++) {
                let ingredient = recipe.ingredients[el].ingredient;
                nomIngredients.push(ingredient.toLowerCase());
            }
            let ingredientOK = nomIngredients.includes(texte);

            if (!descriptionOK && !nameOK && !ustensileOK && !ingredientOK) {
                elementVerifie = false;
            }
        }

        if (elementVerifie === true) {
            tableau.push(recipe);
        }
    }

    return tableau;
}

affichageRecettesFiltres();
