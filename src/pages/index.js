import "./index.css";
import {profileName, profileJob, deleteModal, avatarForm, avatarImage, avatarModal, avatarButton,  defaultConfig, editModal,  nameInput, jobInput, editForm, addForm, cardTemplate, card, editButton, addButton, deleteButton, createButton } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";


//Personal TOken for Aasmi Maam:7c54637c-526f-4047-8439-3339585d598e
const api = new Api({
     baseUrl: "https://around.nomoreparties.co/v1/group-7",
     headers: {
         authorization: "7c54637c-526f-4047-8439-3339585d598e",
         "Content-Type": "application/json"
     }
 });
 
//Edit Profile Form
const userInformation =  new UserInfo ({
  name: '.profile__info-title',
  job: '.profile__info-subtitle',
  avatar: '.profile__image'
});

//function for counting likes
function cardCountLikes(cardElement, cardID){
  if(cardElement.isLiked()){
    api.removeLike(cardID)
    .then(res => {
      cardElement.updateLikes(res.likes)
    })
    .catch(err => console.log(err))
  } else {
    api.addLike(cardID)
    .then(res => {
      cardElement.updateLikes(res.likes)
    })
    .catch(err => console.log(err))
  }
}

//function to create individual cards
function createItem(cardInfo) {
  return new Card({
    data: cardInfo,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    },
    handleDeleteClick: (cardInfo) => {
      deleteCardPopup.open(cardInfo);
    },
    likeHandler: (cardElement, cardID) => {
     cardCountLikes(cardElement, cardID);
    }
  }, userId,
   cardTemplate).createCard()
}

const cardSection = new Section({
  renderer: createItem
}, card)

let userId;

//api getAppInfo
api.getAppInfo()
.then(([userData, cardListData]) => {
    userId = userData._id
    userInformation.setUserInfo(userData.name, userData.about, userData.avatar)
    cardSection.renderItems(cardListData);
    
    const addFormPopup = new PopupWithForm({
      popupSelector: '.popup_type_add-card',
      popupSubmit: ([name, link]) => {
        api.addCard({name, link})
        .then(res => {
          const newCard = createItem(res)
          cardSection.addItem(newCard);
        })
      }
    })
  addFormPopup.setEventListeners();

  ////event listeners for add card button
  addButton.addEventListener('click', (e) => {
    addFormValidator.disableButton();
    addFormValidator.hideErrors();
    addFormPopup.open();
  });
  
})

//call form validator class
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);
const avatarFormValidator = new FormValidator(defaultConfig, avatarForm);
avatarFormValidator.enableValidation();
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();


//Delete Card Form
const deleteCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_delete-card',
  popupSubmit: ([cardID, cardElement]) => {
     loadingPopup(true, deleteModal);
     api.removeCard(cardID)
     .then(() => {
      loadingPopup(false, deleteModal);
      deleteCardPopup.close();
      cardElement.remove();
     })
  }
})
deleteCardPopup.setEventListeners();

 function loadingPopup(isLoading, popup){
   if(isLoading) {
     popup.querySelector('.popup__save').textContent = "Saving...";
   } else {
     popup.querySelector(".popup__save").textContent = "Save";
   }
 }

 const avatarFormPopup = new PopupWithForm({
   popupSelector: '.popup_type_avatar',
   popupSubmit: ([avatar]) => {
     handleAvatarClick(avatar)
   }
 });
 avatarFormPopup.setEventListeners();


 avatarButton.addEventListener('click', (e) => {
   avatarFormValidator.hideErrors();
   avatarFormPopup.open();
 });

 //avatar edit handler
 function handleAvatarClick(avatar){
   loadingPopup(true, avatarModal);
   api.setUserAvatar(avatar)
   .then( res => {
     avatarImage.src = res.avatar;
     loadingPopup(false, avatarModal);
     avatarFormPopup.close();
   })
   .catch(err => console.log(err));
 }

const editFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  popupSubmit: ([name, job]) => {
    handleEditButtonClick(name, job); 
  } 
});
editFormPopup.setEventListeners();

function handleEditButtonClick(name, job){
  loadingPopup(true, editModal);
  api.setUserInfo({name: name, about: job})
  .then(res => {
    profileName.textContent = res.name;
    profileJob.textContent = res.about;
    loadingPopup(false, editModal);
    editFormPopup.close();
  })
  .catch(err => console.log(err))
}

 
 editButton.addEventListener('click', (e) => {
   const [name, job] = userInformation.getUserInfo();
   nameInput.value = name;
   jobInput.value = job;
   editFormValidator.hideErrors();
   editFormPopup.open();
});  



