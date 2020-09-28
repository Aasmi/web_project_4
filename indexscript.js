
/*****************Container Definitions************************/
const popupForm = document.querySelector('.popup__edit-form');
const popupContainer = document.querySelector('.popup__container');
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
const saveProfileButton = document.querySelector('.popup__save-button'); 
const likeButton = document.querySelector('.element__like-button');
const addButton = document.querySelector('.profile__add-button');
const closeCardButton = addCardModalWindow.querySelector('.popup__close-button');
const saveCardButton = addCardModalWindow.querySelector('.popup__save-button');
const closeImageButton = imageModalWindow.querySelector('.popup__close-button');


/************************Other variables and Array Definitions *******************/
const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];

  const cardTemplate = document.querySelector('.card-template').content.querySelector('.element');
  const list = document.querySelector('.elements');


  /*****************Function Definitions ****************/
function togglePopup(modal){  
  
    if (!editProfileModalWindow.classList.contains("popup_opened")){
        inputName.value = profileName.textContent;
        inputAboutme.value = profileAboutme.textContent;
    }   
    
    if(addCardModalWindow.classList.contains("popup_opened")){
      inputTitle.value = "";
      inputLink.value = "";
    }     
    
    modal.classList.toggle('popup_opened');    
}

function renderArray(data){    
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
       initialCards.splice (initialCards.indexOf(data), 1);
       cardElement.remove();
    });

    
    cardImage.addEventListener('click', ()=>{
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        imageModalWindow.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        togglePopup(imageModalWindow);
    });

    list.prepend(cardElement);
  }

function fillProfileValues(){
    event.preventDefault();       
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;        
    togglePopup(editProfileModalWindow)
}

function fillCardValues(){
    event.preventDefault();
    const tempObject = {};
    tempObject["name"] = inputTitle.value;
    tempObject["link"] = inputLink.value;

    renderArray(tempObject);
    togglePopup(addCardModalWindow);
}

initialCards.forEach(renderArray);

/***************************Profile changes events and functions*******************/

editButton.addEventListener('click', ()=>{    
    togglePopup(editProfileModalWindow);
});

closeProfileButton.addEventListener('click', ()=>{
    togglePopup(editProfileModalWindow);
});


editProfileModalWindow.addEventListener('submit', fillProfileValues);


/***************************Add Card events and functions*******************/

addButton.addEventListener('click', () =>{
    togglePopup(addCardModalWindow);
});

closeCardButton.addEventListener('click', ()=>{
    togglePopup(addCardModalWindow);
});

addCardModalWindow.addEventListener('submit', fillCardValues);


/********************Image Popup events and Functions ***********************/
closeImageButton.addEventListener('click', ()=>{
  togglePopup(imageModalWindow);
});


