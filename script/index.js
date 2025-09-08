
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
     <p onclick="loadTreesCategories('${category.id}')" class="p-3 rounded-md text-[#1F2937] bg-[#F0FDF4] w-full text-left cursor-pointer  hover:bg-green-500 hover:text-white">${category.category_name}</p>
     </div>

    `
    categoriesContainer.append(categoriesBtn);

   });


};

// the functionality of load tree categories
const loadTreesCategories = (plantId) => {
    const url = `https://openapi.programming-hero.com/api/category/${plantId}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        showTreesCategories(data.plants);
    
    })
    .catch(err => {
        console.log(err);
    })
    
};


// the functionality of showing the  plant card on display  by clicking a category
const showTreesCategories = (plants) => {
    const plantsContainer = document.getElementById('plants-container');
    plantsContainer.innerHTML = '';
    
    plants.forEach(plant => {
      
        const plantCard = document.createElement('div');
        plantCard.innerHTML = `
       
         <div class="bg-white p-4 rounded-lg space-y-4 shadow-sm">
         <img src="${plant.image}" alt="${plant.name}" class="rounded-lg w-full h-44 object-cover">
         <h2 class="font-semibold text-xl">${plant.name}</h2>
         <p class="text-[#1F2937] text-[12px]">${plant.description}</p>
         <div class="flex justify-between items-center">
         <div class="badge font-geist font-medium text-[#15803D] bg-[#DCFCE7] flex justify-center items-center rounded-full  px-6 py-2 min-w-[50px] h-10">${plant.category}</div>
         <p class="font-semibold text-lg">৳${plant.price}</p>
         </div>
         <button class="btn bg-[#15803D] text-white text-lg rounded-full w-full hover:bg-green-400">Add to Cart</button>
         </div>
        
        
        
        
        `
        plantsContainer.append(plantCard)
    })



};

loadCategories();