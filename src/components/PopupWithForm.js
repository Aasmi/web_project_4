import Popup from "./Popup.js";

//class takes callback of form submission into constructor
export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmit}){
        super(popupSelector); //the 'add/edit FORMS' as this._popupElement (addForm or editForm)
        this._popupSubmit = popupSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._submitEventHandler = this._submitEventHandler.bind(this);
    }

    //private method, collects data from all input fields
    _getInputValues(){
        if(!this._popupElement.querySelector('.popup__input')){ 
            return null
        } else {
            return [...this._popupElement.querySelectorAll('.popup__input')].map(input => input.value);
        }    
    }
    

     _submitEventHandler(e){
            e.preventDefault();
            const submittedValue = this._getInputValues() || this._info;
            this._popupSubmit(submittedValue);
            this.close();
    }

    //modifies setEventListeners, adds click event listener
    //to the close icon, while adding submit event handler
    setEventListeners(){
        this._popupElement.addEventListener('submit', this._submitEventHandler);
        super.setEventListeners();
    }
    //modifies open method
     open(cardInfo){
         super.open();
         this._info = cardInfo;
     }
    //modifies close method to reset form once popup is closed
    close(){
        this._formElement.reset();
        super.close();
    }
}