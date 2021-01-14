export default class Card {
    constructor ({data, handleCardClick}, template){
        this._link = data.link;
        this._name = data.name;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    _getCardTemplate (){
        return this._template.cloneNode(true);
    }

    _handleTrashClick(e){
        e.target.closest('.elements__element').remove(); 
    }

    _handleCardLike(e){
        e.target.classList.toggle('elements__favorite_selected'); 
    }

    _setEventListeners() {
        this._cardLike.addEventListener("click", this._handleCardLike);
        this._cardTrash.addEventListener("click", this._handleTrashClick);
        this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    }

    createCard() { 
        this._cardElement = this._getCardTemplate();
        this._cardTitle = this._cardElement.querySelector('.elements__caption'); 
        this._cardImage = this._cardElement.querySelector('.elements__image'); 
        this._cardLike = this._cardElement.querySelector('.elements__favorite'); 
        this._cardTrash = this._cardElement.querySelector('.elements__trash');            
        this._cardTitle.textContent = this._name; 
        this._cardImage.setAttribute('src', this._link); 
        this._cardImage.setAttribute('alt', this._name); 
        this._setEventListeners();
        return this._cardElement;
    }
}; 