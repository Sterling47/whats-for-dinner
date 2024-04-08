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

var selectedCategory;

//elements querySelectors
var selectedMealText = document.querySelector(".selected-type-of-meal")
var cookpotImg =document.querySelector(".cookpot-img")


var hiddenSection = document.querySelector('.hidden');
var hiddenHeading = hiddenSection.querySelector('h2');
var recipeForm = document.querySelector('.new-recipe')

var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');

//button querys
var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector('.clear-bttn')
var addRecipeButton = document.querySelector('.add-recipe-bttn')
var addNewButton = document.querySelector('.add-new')

// Radio button querys
var sidesRadioButton = document.getElementById("side");
var mainsRadioButton = document.getElementById("main");
var dessertsRadioButton = document.getElementById("dessert");
var entireMealRadioButton = document.getElementById("entire-meal");
var radios = document.getElementsByName('item-select');

var dishHeading = document.querySelector('.content-box h2');

// event listeners
letsCookButton.addEventListener('click', displayRandomDish);
clearButton.addEventListener('click', clearResults)
addRecipeButton.addEventListener('click', showNewRecipeForm)
addNewButton.addEventListener('click', submitNewRecipe)

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
    } else if (selectedCategory === 'entire-meal') {
        var randomSide = getRandomDish(sides);
        var randomMain = getRandomDish(mains);
        var randomDessert = getRandomDish(desserts);

        dishHeading.textContent = `${randomMain} with ${randomSide} & ${randomDessert} for dessert!`;
        cookpotImg.style.display = 'none';
        e.preventDefault();
    } else {
        selectedArray = [];
    }

    var randomDish = getRandomDish(selectedArray);
    dishHeading.textContent = randomDish;
   
    cookpotImg.style.display = 'none';
    e.preventDefault();
}

function clearResults(){
    selectedCategory = '';
    hiddenSection.classList.add('hidden');
    cookpotImg.style.display = '';

    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}

function showNewRecipeForm() {
    recipeForm.classList.remove('hidden')
}

function submitNewRecipe(e){
    hiddenSection.classList.remove('hidden');
    var recipeType = recipeTypeInput.value.toLowerCase().trim(); 
    var recipeName = recipeNameInput.value

    if (recipeType === 'side') {
        sides.push(recipeName);
    } else if (recipeType === 'main') {
        mains.push(recipeName);
    } else if (recipeType === 'dessert') {
        desserts.push(recipeName);
    } else {
        recipeForm.innerHTML += '<p>Please specify a valid recipe type: side, main, or dessert.<p/>';
        return;
    }

    recipeTypeInput.value = '';
    recipeNameInput.value = '';

    dishHeading.textContent = recipeName;
    cookpotImg.style.display = 'none';

    e.preventDefault();
}




