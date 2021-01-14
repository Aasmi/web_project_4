import "./index.css";
import {defaultConfig, editModal, addModal, editForm, addForm, cardTemplate, list, editButton, addButton, createButton } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import initialCards from "../utils/initialCards.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


/*************Definitions**************************88*/
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


//Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();


function createItem(cardInfo) {
  return new Card({
    data: cardInfo,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    }
  }, cardTemplate).createCard()
}


const cardSection = new Section({
  items: initialCards,
  renderer: createItem
}, list)

cardSection.renderer();

const addFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  popupSubmit: ([name, link]) => {
    const newCard = createItem({name, link})
    cardSection.addItem(newCard);
   }
  })

addFormPopup.setEventListeners();


const userInformation =  new UserInfo ({
  name: '.profile__info-title',
  aboutMe: '.profile__info-subtitle'
})


const editFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  popupSubmit: ([name, aboutMe]) => {
    userInformation.setUserInfo(name, aboutMe); 
  } 
})  

editFormPopup.setEventListeners();


addButton.addEventListener('click', (e) => {
  addFormValidator.disableButton();  
  addForm.reset();
  addFormPopup.open();
 });

 
 editButton.addEventListener('click', (e) => {
  const userData = userInformation.getUserInfo()
  editFormPopup.open();
}) 


