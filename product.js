export default class Product{

    constructor(code, name, amount, cost, total){
        this._code = code;
        this._name = name;
        this._amount = amount;
        this._cost = cost;
        this._total = total
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
        return this._total;
    }

    static readForm(){
        let inpCode = document.querySelector("#code");
        let inpName = document.querySelector("#name");
        let inpAmount = document.querySelector("#amount");
        let inpCost = document.querySelector("#cost");

        let code = inpCode.value;
        let name = inpName.value;
        let amount = Number(inpAmount.value);
        let cost = Number(inpCost.value);
        
        if(!code || !name || !amount || !cost){
            return false;
        }

        let total = amount * cost;

        inpCode.value = "";
        inpName.value = "";
        inpAmount.value = "";
        inpCost.value = "";
        return new Product(code, name, amount, cost, total);
    }
}