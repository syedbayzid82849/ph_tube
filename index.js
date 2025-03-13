// categories set 
function loadCategories() {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
     const categoriesContainer = document.getElementById('categories-container');
    const categoriesContainerSm = document.getElementById('categories-container-sm')

    for(const cat of categories){

        // lg screen categories
        const categorieDiv = document.createElement('div');
        categorieDiv.innerHTML = `
        <button class="btn hover:bg-red-500 hover:text-white bg-[#dedede] px-5 py-2 duration-400 text-lg">${cat.category}</button>
        `;
        categoriesContainer.appendChild(categorieDiv);
        // sm  screen categories
        const categorieDivSm = document.createElement('div');
        categorieDivSm.innerHTML = `
        <button class=" hover:bg-red-500 hover:text-white  px-5 py-2 duration-400 text-lg rounded-xl">${cat.category}</button>
        `;
        categoriesContainerSm.appendChild(categorieDivSm);
    }
}
loadCategories();