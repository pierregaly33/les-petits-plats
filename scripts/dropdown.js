const listIngredient = document.querySelector(".dropdown_liste_ingredient");
listIngredient.style.display = "none";

const rechercheIngredients = document.querySelector(".dropdown_recherche_ingredient");
rechercheIngredients.style.display = "none";

let ouvertIngredient = false;
function openIngredient() {
    listIngredient.style.display = "block";
    rechercheIngredients.style.display = "block";
    ouvertIngredient = true;
}

function closeIngredient() {
    listIngredient.style.display = "none";
    rechercheIngredients.style.display = "none";
    ouvertIngredient = false;
}

function toggleIngredient() {
    if (ouvertIngredient == false) {
        openIngredient();
    } else {
        closeIngredient();
    }
}

getDropdownDomIngredient(getIngredient(recipes));

const boutonDropdownIngredient = document.querySelector(".bouton_dropdown_ingredient");
boutonDropdownIngredient.addEventListener("click", () => {
    toggleIngredient();
});

function getDropdownDomIngredient(ingredients) {
    const ulIngredients = document.querySelector(".dropdown_liste_ingredient");
    ulIngredients.innerHTML = "";

    ingredients.forEach((ingredient) => {
        const liIngredient = document.createElement("li");
        ulIngredients.appendChild(liIngredient);
        liIngredient.textContent = ingredient.ingredient;
    });
}

function getIngredient(tableau) {
    let tableauIntermediaire = tableau.flatMap((recipe) => recipe.ingredients);

    let tableauSansDoublon = tableauIntermediaire.filter(
        (item, i) =>
            tableauIntermediaire.findIndex(
                (item2) => item.ingredient.toUpperCase() == item2.ingredient.toUpperCase()
            ) == i
    );
    return tableauSansDoublon;
}

const listAppareil = document.querySelector(".dropdown_liste_appareils");
listAppareil.style.display = "none";

const rechercheAppareil = document.querySelector(".dropdown_recherche_appareils");
rechercheAppareil.style.display = "none";

let ouvertAppareil = false;
function openAppareil() {
    listAppareil.style.display = "block";
    rechercheAppareil.style.display = "block";
    ouvertAppareil = true;
}

function closeAppareil() {
    listAppareil.style.display = "none";
    rechercheAppareil.style.display = "none";
    ouvertAppareil = false;
}

function toggleAppareil() {
    if (ouvertAppareil == false) {
        openAppareil();
    } else {
        closeAppareil();
    }
}
getDropdownDomAppareil(recipes);

function getDropdownDomAppareil(appareils) {
    const ulAppareil = document.querySelector(".dropdown_liste_appareils");
    ulAppareil.innerHTML = "";

    let tableauSansDoublon = appareils.filter(
        (item, i) => appareils.findIndex((item2) => item.appliance.toUpperCase() == item2.appliance.toUpperCase()) == i
    );

    tableauSansDoublon.forEach((appareil) => {
        const liAppareil = document.createElement("li");
        ulAppareil.appendChild(liAppareil);
        liAppareil.textContent = appareil.appliance;
    });
}

const boutonDropdownAppareil = document.querySelector(".bouton_dropdown_appareils");
boutonDropdownAppareil.addEventListener("click", () => {
    toggleAppareil();
});

const listUstensiles = document.querySelector(".dropdown_liste_ustensiles");
listUstensiles.style.display = "none";

const rechercheUstensiles = document.querySelector(".dropdown_recherche_ustensiles");
rechercheUstensiles.style.display = "none";

let ouvertUstensile = false;
function openUstensiles() {
    listUstensiles.style.display = "block";
    rechercheUstensiles.style.display = "block";
    ouvertUstensile = true;
}

function closeUstensiles() {
    listUstensiles.style.display = "none";
    rechercheUstensiles.style.display = "none";
    ouvertUstensile = false;
}

function toggleUstensiles() {
    if (ouvertUstensile == false) {
        openUstensiles();
    } else {
        closeUstensiles();
    }
}

const boutonDropdownUstensiles = document.querySelector(".bouton_dropdown_ustensiles");
boutonDropdownUstensiles.addEventListener("click", () => {
    toggleUstensiles();
});

function getDropdownDomUstensile(ustensils) {
    const ulUstensile = document.querySelector(".dropdown_liste_ustensiles");
    ulUstensile.innerHTML = "";

    ustensils.forEach((ustensil) => {
        const liUstensile = document.createElement("li");
        ulUstensile.appendChild(liUstensile);
        liUstensile.textContent = ustensil;
    });
}

function name(params) {}

function getUstensile(tableau) {
    let tableauIntermediaire = tableau.flatMap((recipe) => recipe.ustensils);

    let tableauSansDoublon = tableauIntermediaire.filter(
        (item, i) => tableauIntermediaire.findIndex((item2) => item.toUpperCase() == item2.toUpperCase()) == i
    );
    return tableauSansDoublon;
}

getDropdownDomUstensile(getUstensile(recipes));

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
