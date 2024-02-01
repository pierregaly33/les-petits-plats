const list = document.querySelector(".dropdown_liste");
list.style.display = "none";

const rechercheIngredients = document.querySelector(".dropdown_recherche");
rechercheIngredients.style.display = "none";

const boutonDropdown = document.querySelector(".bouton_dropdown");
boutonDropdown.addEventListener("click", () => {
    list.style.display = "block";
    rechercheIngredients.style.display = "block";
});
console.log(boutonDropdown);
