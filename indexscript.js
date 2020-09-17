
/******************button Definitions *****************/
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button'); 

const popupForm = document.querySelector('.popup__edit-form');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

const inputName = document.querySelector('.popup__field_type_name');
const inputAboutme = document.querySelector('.popup__field_type_aboutme');

const profileName = document.querySelector('.profile__name');
const profileAboutme = document.querySelector('.profile__about-me');


/*****************Function Definitions ****************/
function togglePopup(){  
    
    if (!popup.classList.contains("popup_opened")){
        inputName.value = profileName.textContent;
        inputAboutme.value = profileAboutme.textContent;
    }
       
    popup.classList.toggle('popup_opened');
}

function fillProfileValues(){
    event.preventDefault();  
      
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;
    
        
    togglePopup()
}

/***************************Program *******************/

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click',togglePopup);

popupContainer.addEventListener('submit', fillProfileValues);


