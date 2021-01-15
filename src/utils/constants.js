const defaultConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };
  
  
  const editModal= document.querySelector('.popup_type_edit'); 
  const addModal = document.querySelector('.popup_type_add-card'); 
  const editForm = editModal.querySelector('.edit-form'); 
  const addForm = addModal.querySelector('.add-form'); 
  
  const cardTemplate = document.querySelector('.card__template').content;
  const list = document.querySelector('.elements'); 
 
  const editButton = document.querySelector('.profile__edit-button');
  const addButton = document.querySelector('.profile__add-button');
  const createButton = addModal.querySelector('.popup__save');

const nameInput = document.querySelector('.popup__input_type_name'); 
const aboutMeInput = document.querySelector('.popup__input_type_job'); 
/*
const profileName = document.querySelector('.profile__info-title'); 
const profileJob = document.querySelector('.profile__info-subtitle');  
const titleInput = addForm.querySelector('.popup__input_type_title'); 
const linkInput = addForm.querySelector('.popup__input_type_link'); 
const profileInfo = new UserInfo(profileName, profileJob);*/

  export {defaultConfig, editModal, addModal, editForm, addForm, cardTemplate, list, editButton, addButton, createButton, nameInput, aboutMeInput}