import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmit}){
        super(popupSelector); 
        this._popupSubmit = popupSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
        /*this._submitEventHandler = this._submitEventHandler.bind(this);*/
    }

    _getInputValues(){
        return [...this._popupElement.querySelectorAll('.popup__input')].map(input => input.value);
    }

    /* _submitEventHandler(){
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._popupSubmit(this._getInputValues());
            this.close();
        });
    }

    setEventListeners(){
        this._popupElement.addEventListener('submit', this._submitEventHandler);
        super.setEventListeners();
    }*/

    setEventListeners(){
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._popupSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
    
    close(){
        super.close();
        //this._formElement.reset()
    }
}
