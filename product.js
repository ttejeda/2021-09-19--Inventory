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

    static readForm(){
        let inpCode = document.querySelector("#code");
        let inpName = document.querySelector("#name");
        let inpAmount = document.querySelector("#amount");
        let inpCost = document.querySelector("#cost");

        let code = inpCode.value;
        let name = inpName.value;
        let amount = inpAmount.value;
        let cost = inpCost.value;
        
        if(!code || !name || !amount || !cost){
            return false;
        }

        inpCode.value = "";
        inpName.value = "";
        inpAmount.value = "";
        inpCost.value = "";
        return new Product(code, name, Number(amount), Number(cost));
    }
}