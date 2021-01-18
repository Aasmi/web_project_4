// const addModal = document.querySelector('.popup_type_add-card');
// const addForm = addModal.querySelector('.add-form');

export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
    }

    open(){
        this._popupElement.classList.add('popup_open');
        document.addEventListener('keyup', this._handleEscapeClose);
    }

    close(){
        this._popupElement.classList.remove('popup_open');
        document.removeEventListener('keyup', this._handleEscapeClose);

    }
    _handleEscapeClose(e){
        if(e.which == 27) {
            this.close();
        }
    } 

    setEventListeners(){
        this._popupElement.addEventListener('click', (e) => {
            if(e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
                this.close();
            }
        })
    }
}


// editButton.addEventListener('click',(e) => openModal(editModal));

// //Edit Form Submit/Save Button Functionality
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });
// //Add Form Submit/Save Button Functionality
// addForm.addEventListener('submit', (e)  => { 
//   e.preventDefault(); 
//   //create card: 
//   const newCard = {name: titleInput.value, link: linkInput.value};
//   //initiateCardModule(newCard, "prepend");
//   cardSection.addItem(newCard);

//   //close modal after submit 
//   closeModal(addModal); 
//   addForm.reset(); 
//   });

  
  

  


