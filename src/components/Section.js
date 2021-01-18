export default class Section {
    constructor({renderer}, container) {
        this._renderer = renderer;
        this._container = container;
    }
    renderItems(items){
        items.forEach(item => {
            this._container.append(this._renderer(item))
        });
    }

    addItem(newItem){
        this._container.prepend(newItem);
    }
}