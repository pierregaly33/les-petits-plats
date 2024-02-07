function getRecipeDom(recipe) {
    const picture = `assets/images/photos/${recipe.image}`;

    const article = document.createElement("article");
    article.setAttribute("class", "card_recipe");

    const photo = document.createElement("img");
    photo.setAttribute("src", picture);
    photo.setAttribute("alt", recipe.name);
    article.appendChild(photo);

    const footerRecette = document.createElement("div");
    footerRecette.setAttribute("class", "footer-recette");
    article.appendChild(footerRecette);

    const titleRecette = document.createElement("h2");
    titleRecette.textContent = recipe.name;
    titleRecette.setAttribute("class", "nom-recette");
    footerRecette.appendChild(titleRecette);

    const mainRecette = document.createElement("div");
    mainRecette.setAttribute("class", "recette");
    footerRecette.appendChild(mainRecette);

    const titleMainRecette = document.createElement("h3");
    titleMainRecette.textContent = "RECETTE";
    mainRecette.appendChild(titleMainRecette);

    const descriptionRecette = document.createElement("p");
    descriptionRecette.textContent = recipe.description;
    mainRecette.appendChild(descriptionRecette);

    const mainIngredients = document.createElement("div");
    mainIngredients.setAttribute("class", "main-ingredients");
    footerRecette.appendChild(mainIngredients);

    const titleIngredients = document.createElement("h3");
    titleIngredients.setAttribute("class", "title-ingredient");
    titleIngredients.textContent = "Ingrédients";
    mainIngredients.appendChild(titleIngredients);

    const ingredientEtQuantite = document.createElement("div");
    ingredientEtQuantite.setAttribute("class", "ingredient-quantite");
    mainIngredients.appendChild(ingredientEtQuantite);

    recipe.ingredients.forEach((ingredient) => {
        const parentIngredient = document.createElement("div");

        const nomIngredient = document.createElement("p");
        nomIngredient.setAttribute("class", "nom-ingredient");
        nomIngredient.textContent = ingredient.ingredient;

        const quantiteIngredient = document.createElement("p");
        quantiteIngredient.setAttribute("class", "quantite-ingredient");
        quantiteIngredient.textContent = `${ingredient.quantity ?? ""} ${ingredient.unit ?? ""}`;

        parentIngredient.appendChild(nomIngredient);
        parentIngredient.appendChild(quantiteIngredient);

        ingredientEtQuantite.appendChild(parentIngredient);
    });

    return article;
}
