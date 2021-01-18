const defaultConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };
  
  //Popups 
  const editModal= document.querySelector('.popup_type_edit'); 
  const addModal = document.querySelector('.popup_type_add-card'); 
  const avatarModal = document.querySelector('.popup_type_avatar')
  const deleteModal = document.querySelector('.popup_type_delete-card');
  const editForm = editModal.querySelector('.edit-form'); 
  const addForm = addModal.querySelector('.add-form'); 
  const avatarForm = avatarModal.querySelector('.avatar-form');
  
  
  const cardTemplate = document.querySelector('.card__template').content;
  const card = document.querySelector('.elements'); 

  //HTML elements
  const editButton = document.querySelector('.profile__edit-button');
  const addButton = document.querySelector('.profile__add-button');
  const deleteButton = document.querySelector('.elements__delete');
  const createButton = addModal.querySelector('.popup__save');
  const avatarButton = document.querySelector('.profile__image-edit');
  const nameInput = document.querySelector('.popup__input_type_name');
  const jobInput = document.querySelector('.popup__input_type_job');
  const avatarImage = document.querySelector('.profile__image');

  //const nameInput = document.querySelector('.popup__input_type_name'); 
  //const jobInput = document.querySelector('.popup__input_type_job'); 
  const profileName = document.querySelector('.profile__info-title'); 
  const profileJob = document.querySelector('.profile__info-subtitle');  
  //const titleInput = addForm.querySelector('.popup__input_type_title'); 
  //const linkInput = addForm.querySelector('.popup__input_type_link'); 
  //const profileInfo = new UserInfo(profileName, profileJob);

  export { avatarForm, avatarImage, avatarModal, avatarButton,profileName, profileJob, deleteModal, deleteButton, defaultConfig, nameInput, jobInput, editModal, addModal, editForm, addForm, cardTemplate, card, editButton, addButton, createButton }