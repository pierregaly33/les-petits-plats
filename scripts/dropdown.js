function createDropdown(domElement, tableauString) {
    let dejaOuvert;
    const liste = domElement.querySelector("ul");
    function openDropdown() {
        domElement.querySelector("input").style.display = "block";
        liste.style.display = "block";
        dejaOuvert = true;
    }

    function closeDropdown() {
        domElement.querySelector("input").style.display = "none";
        domElement.querySelector("ul").style.display = "none";
        dejaOuvert = false;
    }

    function toggleDropdown() {
        if (dejaOuvert == false) {
            openDropdown(domElement);
        } else {
            closeDropdown(domElement);
        }
    }

    domElement.querySelector("button").addEventListener("click", () => {
        toggleDropdown();
    });
    closeDropdown();

    tableauString.forEach((element) => {
        const createLi = document.createElement("li");
        liste.appendChild(createLi);
        createLi.textContent = element;
    });
}

var dropDownIngredient = createDropdown(document.querySelector("#dropdown-ingredients"), getIngredient(recipes));
createDropdown(document.querySelector("#dropdown-appareil"), getAppareils(recipes));
createDropdown(document.querySelector("#dropdown-ustensiles"), getUstensile(recipes));

function getIngredient(tableau) {
    let tableauIntermediaire = tableau.flatMap((recipe) => recipe.ingredients);

    let tableauSansDoublon = tableauIntermediaire.filter(
        (item, i) =>
            tableauIntermediaire.findIndex(
                (item2) => item.ingredient.toUpperCase() == item2.ingredient.toUpperCase()
            ) == i
    );
    return tableauSansDoublon.map((element) => element.ingredient);
}

function getAppareils(tableau) {
    let tableauSansDoublon = tableau.filter(
        (item, i) => tableau.findIndex((item2) => item.appliance.toUpperCase() == item2.appliance.toUpperCase()) == i
    );

    return tableauSansDoublon.map((element) => element.appliance);
}

function getUstensile(tableau) {
    let tableauIntermediaire = tableau.flatMap((recipe) => recipe.ustensils);

    let tableauSansDoublon = tableauIntermediaire.filter(
        (item, i) => tableauIntermediaire.findIndex((item2) => item.toUpperCase() == item2.toUpperCase()) == i
    );

    return tableauSansDoublon.map((element) => element);
}

function initDropdownSearchIngredient() {
    const searchBar = document.querySelector(".dropdown_recherche_ingredient");
    searchBar.addEventListener("input", (e) => {
        let filteredIngredient = filterIngredient(e.target.value, ingredientFiltered);
        getDropdownDomIngredient(filteredIngredient);
    });
}

function filterIngredient(text, ingredient) {
    const element = text.toLowerCase();
    const newIngredients = ingredient.filter((ingredient) => ingredient.ingredient.toLowerCase().includes(element));
    return newIngredients;
}

initDropdownSearchIngredient();

function initDropdownSearchUstensil() {
    const searchBar = document.querySelector(".dropdown_recherche_ustensiles");
    searchBar.addEventListener("input", (e) => {
        let filteredUstensil = filterUstensils(e.target.value, ustensilFiltered);
        getDropdownDomUstensile(filteredUstensil);
    });
}

function filterUstensils(text, ustensil) {
    const element = text.toLowerCase();
    const newUstensils = ustensil.filter((ustensil) => ustensil.toLowerCase().includes(element));
    return newUstensils;
}

initDropdownSearchUstensil();
