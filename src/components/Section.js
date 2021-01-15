export default class Section {
    constructor({items, renderer}, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }


    renderer(){
        this._items.forEach(item => {
            this._container.append(this._renderer(item))
        });
    }
    addItem(newItem){      
        this._newItem = newItem;
        this._container.prepend(this._newItem);
    }
}

