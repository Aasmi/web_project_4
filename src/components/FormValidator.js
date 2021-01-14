export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
    }
   
    _showErrorMessage(inputElement) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");

        errorElement.textContent = inputElement.validationMessage;

        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(inputElement) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement, inputErrorClass) {
        if(inputElement.validity.valid) {
            this._hideErrorMessage(inputElement, inputErrorClass);
        } else {
            this._showErrorMessage(inputElement, inputErrorClass);
        }
    }

    _toggleButtonState(formElement, inputSelector) {
        const inputs = [...formElement.querySelectorAll(inputSelector)];
        const isValid = inputs.every(input => input.validity.valid);
        const buttonElement = this._form.querySelector(this._submitButtonSelector);
        if(isValid) {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        }
    }
    
    disableButton() {
        this._addModal = document.querySelector('.popup_type_add-card');
        this._createButton = this._addModal.querySelector('.popup__save');
        this._createButton.classList.add('popup__save_disabled');
        this._createButton.disabled = true;
    }
 
    _setEventListeners() {
        const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));        
        inputs.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
               this._checkInputValidity(inputElement, this._inputErrorClass);
               this._toggleButtonState(this._form, this._inputSelector);
               });
           });
        };

   enableValidation () {
    this._form.addEventListener('submit', (e) => {
       e.preventDefault();
       });
       
    this._setEventListeners();    
   };
};