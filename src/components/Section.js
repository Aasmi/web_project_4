export default class Section {
    constructor({items, renderer}, templateContainer) {
        this._items = items;
        this._renderer = renderer;
        this._templateContainer = templateContainer;
    }


    renderer(){
        this._items.forEach(item => {
            this._templateContainer.append(this._renderer(item))
        });
    }
    addItem(newItem){      
        this._newItem = newItem;
        this._templateContainer.prepend(this._newItem);
    }
}

