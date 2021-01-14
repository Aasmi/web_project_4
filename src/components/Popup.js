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
  
  

  


