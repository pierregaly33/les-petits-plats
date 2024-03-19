const dropdownDomIngredient = document.querySelector("#dropdown-ingredients");
const dropdownDomAppareil = document.querySelector("#dropdown-appareil");
const dropdownDomUstensil = document.querySelector("#dropdown-ustensiles");

function createDropdown(domElement, tableauString, fonctionAExecuterAuclick) {
    let dejaOuvert;

    const liste = domElement.querySelector("ul");
    const searchBar = domElement.querySelector("input");

    let tableauDeRecherche = tableauString;

    function openDropdown() {
        domElement.classList.add("open");
        domElement.classList.remove("close");

        dejaOuvert = true;
    }

    function closeDropdown() {
        domElement.classList.remove("open");
        domElement.classList.add("close");

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

    function createDomLi(tableau) {
        tableau.forEach((element) => {
            const createLi = document.createElement("li");
            createLi.setAttribute("class", "liste-dropdown");
            createLi.addEventListener("click", (e) => {
                fonctionAExecuterAuclick(e);
                closeDropdown();
            });
            liste.appendChild(createLi);
            createLi.textContent = element;
        });
    }
    createDomLi(tableauString);

    searchBar.addEventListener("input", (e) => {
        const filteredItems = filter(e.target.value);
        liste.innerHTML = "";
        createDomLi(filteredItems);
    });

    function updateDropdown(nouvellesValeurs) {
        tableauDeRecherche = nouvellesValeurs;
        liste.innerHTML = "";
        createDomLi(nouvellesValeurs);
    }

    return { updateDropdown };
}

const dropdownIngredient = createDropdown(dropdownDomIngredient, getIngredient(recipes), (e) => {
    createTag(e.target.textContent, "#ingredients");
});

const dropdownAppareil = createDropdown(dropdownDomAppareil, getAppareils(recipes), (e) => {
    createTag(e.target.textContent, "#appareils");
});
const dropdownUstensil = createDropdown(dropdownDomUstensil, getUstensile(recipes), (e) => {
    createTag(e.target.textContent, "#ustensiles");
});

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
