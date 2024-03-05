function filtreParTag() {
    const tagCreer = document.querySelectorAll(".tag");
    tableauVide = [];
    tagCreer.forEach((element) => {
        tableauVide.push(element.textContent);
    });
    let filterTag = filterRecipe(tableauVide);
    displayRecipes(filterTag);

    let ingredientFiltered = getIngredient(filterTag);
    let appareilFiltered = getAppareils(filterTag);
    let ustensilFiltered = getUstensile(filterTag);

    dropdownIngredient.updateDropdown(ingredientFiltered);
    dropdownAppareil.updateDropdown(appareilFiltered);
    dropdownUstensil.updateDropdown(ustensilFiltered);
}

function createTag(chaineDecaractere, dedansQuoiJajouteMesTag) {
    const main = document.querySelector(dedansQuoiJajouteMesTag);
    const mainTag = document.createElement("div");
    mainTag.setAttribute("class", "main-tag");
    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");
    main.appendChild(mainTag);
    mainTag.appendChild(tag);
    const close = document.createElement("img");
    close.setAttribute("class", "close-tag");
    close.src = "assets/Vector.svg";
    mainTag.appendChild(close);

    tag.textContent = chaineDecaractere;
    close.addEventListener("click", () => {
        mainTag.remove();
        filtreParTag();
    });
    filtreParTag();
}
