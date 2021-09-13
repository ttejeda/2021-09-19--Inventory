export default class Product{

    constructor(code, name, amount, cost){
        this._code = code;
        this._name = name;
        this._amount = amount;
        this._cost = cost;
    }

    getCode(){
        return this._code;
    }

    getName(){
        return this._name;
    }

    getAmount(){
        return this._amount;
    }

    getCost(){
        return this._cost;
    }

    getTotal(){
        return this._amount * this._cost;
    }
}