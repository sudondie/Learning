class Car {
    _slogan = 'Zoom-zoom';
    constructor(model,price,_slogan) {
        this.model = model;
        this.price = price;
        this._slogan = _slogan;
    }
    get info() {
        return this.name  + this._slogan;
    }
}
let BMW = new Car('X6','30000$');
console.log(BMW)