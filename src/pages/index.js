import "./index.css";

/*import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';*/
import {togglePopup, saveButtonDisabled} from '../components/Utils.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import initialCards from '../components/initialCards.js'


/*****************Config Definitions ************************/
const defaultConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}

/*****************Container Definitions************************/
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const imageModalWindow = document.querySelector('.popup_type_image');

/*****************Modal Fields Definitions *******************/
const inputName = document.querySelector('.popup__field_type_name');
const inputAboutme = document.querySelector('.popup__field_type_aboutme');

const profileName = document.querySelector('.profile__name');
const profileAboutme = document.querySelector('.profile__about-me');

const inputTitle = document.querySelector('.popup__field_card-title');
const inputLink = document.querySelector('.popup__field_card-url'); 



/******************button Definitions *****************/
const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = editProfileModalWindow.querySelector('.popup__close-button');

const addButton = document.querySelector('.profile__add-button');
const closeCardButton = addCardModalWindow.querySelector('.popup__close-button');

const closeImageButton = imageModalWindow.querySelector('.popup__close-button');


/************************Other global variable Definitions *******************/  
  const list = document.querySelector('.elements');


/***********************Validation Definitions ****************************/
const editFormValidator = new FormValidator(defaultConfig, editProfileModalWindow);
const addCardFormValidator = new FormValidator(defaultConfig, addCardModalWindow);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

/************************Function Definitions ******************************/ 
function fillDefaultEditProfileValues(){
  if (!editProfileModalWindow.classList.contains("popup_opened")){
    inputName.value = profileName.textContent;
    inputAboutme.value = profileAboutme.textContent;
  }  
}

function fillDefaultCardModalValues(){
  if(!addCardModalWindow.classList.contains("popup_opened")){
    inputTitle.value = "";
    inputLink.value = "";
    }    
}

function fillProfileValues(event){
    event.preventDefault();       
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;        
    togglePopup(editProfileModalWindow);
}

function fillCardValues(event){
    event.preventDefault();
    const tempObject = {};
    tempObject.name = inputTitle.value;
    tempObject.link = inputLink.value;

    list.prepend(new Card(tempObject, '.card-template').renderNewCard());
    togglePopup(addCardModalWindow);
}


initialCards.forEach((data) => list.prepend(new Card(data, '.card-template').renderNewCard()));

/***************************Profile changes events and functions*******************/

editButton.addEventListener('click', ()=>{  
    fillDefaultEditProfileValues();
    togglePopup(editProfileModalWindow);
});

closeProfileButton.addEventListener('click', ()=>{
    fillDefaultEditProfileValues();
    togglePopup(editProfileModalWindow);
});


editProfileModalWindow.addEventListener('submit', fillProfileValues);
/***************************Add Card events and functions*******************/

addButton.addEventListener('click', () =>{
    fillDefaultCardModalValues();
    saveButtonDisabled(addCardModalWindow);
    togglePopup(addCardModalWindow);
});

closeCardButton.addEventListener('click', ()=>{
    fillDefaultCardModalValues();
    togglePopup(addCardModalWindow);
});

addCardModalWindow.addEventListener('submit', fillCardValues);


/********************Image Popup events and Functions ***********************/
closeImageButton.addEventListener('click', ()=>{
    togglePopup(imageModalWindow);
});


