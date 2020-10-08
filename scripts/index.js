
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

const popupImage = imageModalWindow.querySelector('.popup__image');
const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');


/******************button Definitions *****************/
const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = editProfileModalWindow.querySelector('.popup__close-button');

const addButton = document.querySelector('.profile__add-button');
const closeCardButton = addCardModalWindow.querySelector('.popup__close-button');

const closeImageButton = imageModalWindow.querySelector('.popup__close-button');


/************************Other global variable Definitions *******************/

  const cardTemplate = document.querySelector('.card-template').content.querySelector('.element');
  const list = document.querySelector('.elements');


  /*****************Function Definitions ****************/ 
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

/*function togglePopup(modal){   
    modal.classList.toggle('popup_opened');    
}*/

function togglePopup(modal){  
    if(!modal.classList.contains('popup_opened')) { 
        modal.addEventListener('click', closeModalOutside); 
        window.addEventListener('keydown', escCloseModal); 
    } 
    else { 
        modal.removeEventListener('click', closeModalOutside); 
        window.removeEventListener('keydown', escCloseModal); 
    }  
    modal.classList.toggle('popup_opened');    
}

function closeModalOutside(event) { 
    togglePopup(event.target);
  } 
   
  // Function To Close Modals on Esc 
  function escCloseModal(event) { 
    if (event.key === 'Escape') { 
      const openModal = document.querySelector('.popup_opened'); 
      togglePopup(openModal); 
    } 
  }

function renderNewCard(data){    
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.element__image');
    const cardDeleteButton = cardElement.querySelector('.element__delete-button');
    const cardText = cardElement.querySelector('.element__text');
    const cardLikeButton = cardElement.querySelector('.element__like-button');
        
    cardText.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;  

    cardLikeButton.addEventListener('click', ()=>{
        cardLikeButton.classList.toggle('element__like-button_dark');
    });

    cardDeleteButton.addEventListener('click', ()=>{
       cardElement.remove();
    });
    
    cardImage.addEventListener('click', ()=>{
        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        togglePopup(imageModalWindow);
    });

    return(cardElement);    
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

    list.prepend(renderNewCard(tempObject));
    togglePopup(addCardModalWindow);
}

initialCards.forEach((data) => list.prepend(renderNewCard(data)));

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
    const saveButton = addCardModalWindow.querySelector('.popup__save-button');
    saveButton.classList.add('popup__save-button_disabled');
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


