export default class Popup {
    constructor(popupSelector) {
      this._popupElement = popupSelector;
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      this._popupElement.classList.add('popup_opened');
      window.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popupElement.classList.remove('popup_opened');
      window.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose(e) {
      if(e.key === 'Escape') {
        this.close();
      }
    }
  
    setEventListeners() {
      window.addEventListener('click', (e) => {
        if(e.target.classList.contains('popup__close-button') || e.target.classList.contains('popup')) {
          this.close();
        }
      })
    }
  }