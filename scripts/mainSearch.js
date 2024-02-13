function test() {
    const searchBar = document.querySelector(".search_input");
    searchBar.addEventListener("input", (e) => {
        var filteredRecipes = filterRecipe(e.target.value);
        displayRecipes(filteredRecipes);
        console.log(filteredRecipes);
    });
}

function filterRecipe(text) {
    const element = text.toLowerCase();
    const newRecipes = recipes.filter(
        (recipe) => recipe.name.toLowerCase().includes(element) || recipe.description.toLowerCase().includes(element)
    );
    return newRecipes;
}
test();
