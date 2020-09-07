/* Let's find the form in the DOM
let editButton = document.querySelector('.profile__button_edit');
console.log(editButton);

editButton.addEventListener('click',()=>{
    let popup = document.querySelector('.popup');

    popup.classList.add('popup_opened');
});*/
/******************button Definitions */
const editButton = document.querySelector('.profile__info_edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button'); 

const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');

function togglePopup(){
    const allClasses= popup.classList;
    console.log(allClasses);
    popup.classList.toggle('popup_opened');
    console.log(allClasses);
    console.log("toggled");
}

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click',togglePopup);

console.log(editButton);
console.log(closeButton);
console.log(saveButton);
console.log(popupContainer);
console.log(popup);


saveButton.addEventListener('click',(event)=>{
    event.preventDefault();

    const inputName = document.querySelector('.popup__field-name');
    const inputAboutme = document.querySelector('.popup__field-aboutme');
    
    const profileName = document.querySelector('.profile__info_name');
    const profileAboutme = document.querySelector('.profile__info_job-details');
    
    profileName.textContent = inputName.value;
    profileAboutme.textContent = inputAboutme.value;
    togglePopup()
})





/*
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = // Use querySelector()
    let jobInput = // Use querySelector()


    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered

    // Insert new values using the textContent property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', formSubmitHandler);*/