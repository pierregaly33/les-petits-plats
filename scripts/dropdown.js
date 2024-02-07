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

const boutonDropdownIngredient = document.querySelector(".bouton_dropdown_ingredient");
boutonDropdownIngredient.addEventListener("click", () => {
    toggleIngredient();
});

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
