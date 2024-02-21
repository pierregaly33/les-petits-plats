const dropdownDomIngredient = document.querySelector("#dropdown-ingredients");
const dropdownDomAppareil = document.querySelector("#dropdown-appareil");
const dropdownDomUstensil = document.querySelector("#dropdown-ustensiles");

function createDropdown(domElement, tableauString) {
    let dejaOuvert;
    const liste = domElement.querySelector("ul");
    const searchBar = domElement.querySelector("input");

    let tableauDeRecherche = tableauString;

    function openDropdown() {
        searchBar.style.display = "block";
        liste.style.display = "block";
        dejaOuvert = true;
    }

    function closeDropdown() {
        searchBar.style.display = "none";
        liste.style.display = "none";
        dejaOuvert = false;
    }

    function toggleDropdown() {
        if (dejaOuvert == false) {
            openDropdown(domElement);
        } else {
            closeDropdown(domElement);
        }
    }

    function filter(text) {
        return tableauDeRecherche.filter((element) => element.toLowerCase().includes(text.toLowerCase()));
    }

    domElement.querySelector("button").addEventListener("click", () => {
        toggleDropdown();
    });
    closeDropdown();

    function createDom(tableau) {
        tableau.forEach((element) => {
            const createLi = document.createElement("li");
            liste.appendChild(createLi);
            createLi.textContent = element;
        });
    }

    createDom(tableauString);

    searchBar.addEventListener("input", (e) => {
        const filteredItems = filter(e.target.value);
        liste.innerHTML = "";
        createDom(filteredItems);
    });

    function updateDropdown(nouvellesValeurs) {
        tableauDeRecherche = nouvellesValeurs;
        liste.innerHTML = "";
        createDom(nouvellesValeurs);
    }
    return { updateDropdown };
}

const dropdownIngredient = createDropdown(dropdownDomIngredient, getIngredient(recipes));
const dropdownAppareil = createDropdown(dropdownDomAppareil, getAppareils(recipes));
const dropdownUstensil = createDropdown(dropdownDomUstensil, getUstensile(recipes));

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
