var sides = ['Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
];

var letsCookButton = document.querySelector(".lets-cook-button")
var selectedMealText = document.querySelector(".selected-type-of-meal")
var cookpotImg =document.querySelector(".cookpot-img")
var addRecipeButton = document.querySelector('.add-recipe-bttn')
var clearButton = document.querySelector('.clear-bttn')
var hiddenSection = document.querySelector('.hidden');
var hiddenHeading = hiddenSection.querySelector('h2');
var recipeForm = document.querySelector('.new-recipe')

//input querys
var sidesRadioButton = document.getElementById("side");
var mainsRadioButton = document.getElementById("main");
var dessertsRadioButton = document.getElementById("dessert");
var entireMealRadioButton = document.getElementById("entire-meal");
var radios = document.getElementsByName('item-select');



// event listeners
letsCookButton.addEventListener('click', displayRandomDish);
clearButton.addEventListener('click', clearResults)
addRecipeButton.addEventListener('click', showNewRecipeForm)

// functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomDish (dishArray) {
    var randomIndex = getRandomIndex(dishArray)
    if (dishArray === sides) {
        return sides[randomIndex];
    } else if (dishArray === mains) {
        return mains[randomIndex];
    } else if (dishArray === desserts) {
        return desserts[randomIndex];
    }
    return dishArray[randomIndex]
}


var selectedCategory;
function displayRandomDish(e) {
    hiddenSection.classList.remove('hidden');

    
    if (sidesRadioButton.checked) {
        selectedCategory = 'side';
    } else if (mainsRadioButton.checked) {
        selectedCategory = 'main';
    } else if (dessertsRadioButton.checked) {
        selectedCategory = 'dessert';
    } else if (entireMealRadioButton.checked) {
        selectedCategory = 'entire-meal';
    } else {
        selectedCategory = '';
    }

    hiddenHeading.textContent = selectedCategory;

    var selectedArray;
    if (selectedCategory === 'side') {
        selectedArray = sides;
    } else if (selectedCategory === 'main') {
        selectedArray = mains;
    } else if (selectedCategory === 'dessert') {
        selectedArray = desserts;
    } else {
        selectedArray = [];
    }

    var randomDish = getRandomDish(selectedArray);
    var dishHeading = document.querySelector('.content-box h2');
    dishHeading.textContent = randomDish;
   
    cookpotImg.style.display = 'none';
    e.preventDefault();
}

function clearResults(){
     selectedCategory = '';
     hiddenSection.classList.add('hidden');
     cookpotImg.style.display = '';

     for (var i = 0; i < radios.length; i++) {
        console.log(radios, '<<<<<<<')
         radios[i].checked = false;
     }
}

function showNewRecipeForm() {
    recipeForm.classList.remove('hidden')
}




