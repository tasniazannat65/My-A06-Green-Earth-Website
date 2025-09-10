
// the functionality of load categories
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        showCategories(data.categories);
       loadAllPlantsCategories();
     
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
     <button id="${category.id}" onclick="loadTreesCategories('${category.id}')" class="category-btn btn shadow-sm p-3 rounded-md text-[#1F2937] bg-[#F0FDF4] w-full text-left cursor-pointer  hover:bg-green-500 hover:text-white">${category.category_name}</button>
     </div>

    `
    categoriesContainer.append(categoriesBtn);

   });
     
   categoriesContainer.addEventListener('click', (event) => {
    if(event.target.className.includes('category-btn')){
        const allCategories = document.querySelectorAll('.category-btn');
        allCategories.forEach(button => {
            button.classList.remove('bg-[#15803D]', 'text-white');
            button.classList.add('bg-[#F0FDF4]');
        })
        event.target.classList.add('bg-[#15803D]', 'text-white');
        event.target.classList.remove('bg-[#F0FDF4]');
        loadTreesCategories(event.target.id);
    }
   })





};
// the functionality of showing all plant cards by default on the display
const loadAllPlantsCategories = () => {
    manageSpinner(true);
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showTreesCategories(data.plants);
    })
    .catch(err => {
        console.log(err);
    })
}

// the functionality of load tree categories
const loadTreesCategories = (plantId) => {
    manageSpinner(true);
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
       
         <div class=" bg-white p-4 rounded-lg space-y-4 shadow-sm">
         <img src="${plant.image}" alt="${plant.name}" class="rounded-lg w-full h-44 object-cover">
         <h2 onclick="loadPlantDetails('${plant.id}')" class=" font-semibold text-xl cursor-pointer">${plant.name}</h2>
         <p class="text-[#1F2937] text-[12px]">${plant.description}</p>
         <div class="flex justify-between items-center">
         <div class="badge font-geist font-medium text-[#15803D] bg-[#DCFCE7] flex justify-center items-center rounded-full  px-6 py-2 min-w-[50px] h-10">${plant.category}</div>
         <p class=" font-semibold text-lg text-[#15803D]">৳<span class="plant-price">${plant.price}</span></p>
         </div>
         <button class=" cart-btn btn bg-[#15803D] text-white text-lg rounded-full w-full hover:bg-green-400">Add to Cart</button>
         </div>
        
        
        
        
        `
        plantsContainer.append(plantCard);
    })
    manageSpinner(false);
   
   



};
// the functionality of load plant details
const loadPlantDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        showPlantDetails(data.plants);
    })
    .catch(err => {
        console.log(err);
    })
};
// the functionality of showing full tree details to open a modal by clicking the plant name.
const showPlantDetails = (details) => {
    
    const modalDetails = document.getElementById('plant-details-container');
    modalDetails.innerHTML = `
     <div class="p-2 space-y-3">
                <h2 class="text-xl font-bold">${details.name}</h2>
                <img src="${details.image}" alt="${details.name}" class="rounded-lg w-full h-56 object-cover">
                <p><span  class="font-bold text-lg">Category:</span> ${details.category}</p>
                <p><span class="font-bold text-lg">Price:</span> ৳<span>${details.price}</span></p>
                <p><span class="font-bold text-lg">Description:</span> ${details.description}</p>
            </div>
    
    `
    document.getElementById('details_modal').showModal();

};
// thw functionality of loading spinner on display 
const manageSpinner = (status) => {
    if(status === true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('plants-container').classList.add('hidden');
    }
    else{
        document.getElementById('plants-container').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden');
    }
}
// the functionality of clicking add to cart button 
document.getElementById('plants-container').addEventListener('click', (event) => {
    if(event.target.className.includes('cart-btn')){
        handleAddToCart(event);
    }
   
})
   let carts = [];


const handleAddToCart = (event) => {
   
    const plantCard = event.target.parentNode;
    const plantName = plantCard.querySelector('h2').innerText;
    const price = Number(plantCard.querySelector('.plant-price').innerText);
    
    
    carts.push({
        plantName: plantName,
        price: price
        
    })
    showAddToCarts();
    plantsTotalPrice();
    alert(`${plantName} has been added to the cart`);
    
    


}

const showAddToCarts = () => {
   
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
     carts.forEach((cart, index) => {
         
       const cartDiv = document.createElement('div');
       cartDiv.innerHTML = `
        <div class="bg-[#F0FDF4] p-3 rounded-lg flex justify-between items-center shadow-sm">
           <div> 
            <h2 class="font-semibold text-lg">${cart.plantName}</h2>
            <p>৳${cart.price}</p>
            </div>
            <div>
            <span onclick="deleteCart('${index}')" class="cursor-pointer">❌</span>
            </div>
            </div>
       
       
       
       
       `
       cartContainer.append(cartDiv);
     });
    

     
     
};
// the functionality of removing plant name and price from cart container
const deleteCart = (cartIndex) => {
    const filteredCarts = carts.filter((cart, index) => index !== Number(cartIndex));
     carts = filteredCarts;
    
    showAddToCarts(carts);
    plantsTotalPrice();
}
// the functionality of sum the total prices of plants 
const plantsTotalPrice = () => {
    const total =  carts.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerHTML = `
    <h2 id="total-price">Total:৳${total}</h2>
    `
};





loadCategories();


