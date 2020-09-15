
/******************button Definitions */
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button'); 

const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');

const inputName = document.querySelector('.popup__field_name');
const inputAboutme = document.querySelector('.popup__field_aboutme');

const profileName = document.querySelector('.profile__name');
const profileAboutme = document.querySelector('.profile__AboutMe');


/*****************Function Definitions */
function togglePopup(){
    popup.classList.toggle('popup_opened');
}

function fillProfileValues(){
    event.preventDefault();    
    
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;

    togglePopup()
}

function fillDefaultValues(){
    event.preventDefault(); 

    inputName.value = profileName.textContent;
    inputAboutme.value = profileAboutme.textContent;

    togglePopup()
}

/***************************Program */

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click',fillDefaultValues);

saveButton.addEventListener('click',fillProfileValues);
