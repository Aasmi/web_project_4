
/******************button Definitions */
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button'); 

const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');

const inputName = document.querySelector('.popup__field_type_name');
const inputAboutme = document.querySelector('.popup__field_type_aboutme');

const profileName = document.querySelector('.profile__name');
const profileAboutme = document.querySelector('.profile__About-Me');


/*****************Function Definitions */
function fillProfileValues(){
    event.preventDefault();    
    
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;

    togglePopup()
}
/*
function fillDefaultValues(){
    event.preventDefault(); 

    inputName.value = profileName.textContent;
    inputAboutme.value = profileAboutme.textContent;

    togglePopup()
}*/

function togglePopup(){
    inputName.value = profileName.textContent;
    inputAboutme.value = profileAboutme.textContent;
    popup.classList.toggle('popup_opened');
}

/***************************Program */

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click',togglePopup);

saveButton.addEventListener('click',fillProfileValues);
