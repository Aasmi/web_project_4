export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
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
        const isValid = this._inputs.every(input => input.validity.valid);
        if(isValid) {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    disableButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

  
    _setEventListeners() {
        this._inputs.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement, this._inputErrorClass);
                this._toggleButtonState(this._form, this._inputSelector);
                });
           });
    }
    
    hideErrors(){
        this._inputs.forEach(inputElement => {
        this._hideErrorMessage(inputElement);
        })
    }     

  
   enableValidation () {
    this._form.addEventListener('submit', (e) => {
       e.preventDefault();
       });
       
    this._setEventListeners();    
   };
};