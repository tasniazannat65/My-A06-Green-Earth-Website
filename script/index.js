
// the functionality of load categories
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        showCategories(data.categories);
    })
    .catch(err => {
        console.log(err);
    })
};
// the functionality of load categories is showing in the display
const showCategories = (categories) => {
    
   const categoriesContainer = document.getElementById('categories-container');
   categoriesContainer.innerHTML = '';
   
   categories.forEach(category => {
     
    const categoriesBtn = document.createElement('div');
    categoriesBtn.innerHTML = `
     <div>
     <button class="p-3 rounded-md text-[#1F2937] bg-[#F0FDF4] w-full text-left  hover:bg-green-500 hover:text-white shadow-sm ">${category.category_name}</button>
     </div>

    `
    categoriesContainer.append(categoriesBtn);

   });


}



loadCategories();