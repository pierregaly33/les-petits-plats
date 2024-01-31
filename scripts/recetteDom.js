function getRecipeDom(recipe) {
    const picture = `assets/images/photos/${recipe.image}`;

    const article = document.createElement("article");

    const photo = document.createElement("img");
    photo.setAttribute("src", picture);
    photo.setAttribute("alt", recipe.name);
    article.appendChild(photo);

    const titleRecette = document.createElement("h2");
    titleRecette.textContent = recipe.name;
    article.appendChild(titleRecette);

    const mainRecette = document.createElement("div");
    article.appendChild(mainRecette);

    const titleMainRecette = document.createElement("h3");
    titleMainRecette.textContent = "RECETTE";
    mainRecette.appendChild(titleMainRecette);

    const descriptionRecette = document.createElement("p");
    descriptionRecette.textContent = recipe.description;
    mainRecette.appendChild(descriptionRecette);

    const mainIngredients = document.createElement("div");
    article.appendChild(mainIngredients);

    const titleIngredients = document.createElement("h3");
    titleIngredients.textContent = "Ingrédients";
    mainIngredients.appendChild(titleIngredients);

    recipe.ingredients.forEach((ingredient) => {
        const parentIngredient = document.createElement("div");

        const nomIngredient = document.createElement("p");
        nomIngredient.textContent = ingredient.ingredient;

        const quantiteIngredient = document.createElement("p");
        quantiteIngredient.textContent = `${ingredient.quantity ?? ""} ${ingredient.unit ?? ""}`;

        parentIngredient.appendChild(nomIngredient);
        parentIngredient.appendChild(quantiteIngredient);

        mainIngredients.appendChild(parentIngredient);
    });

    return article;
}
