export default class Inventory{

    constructor(){
        this._inventory = new Array();
    }

    addProduct(product){
        let pos = this._search(product);
        if(pos == -1){
            this._inventory.push(product);
            return true;
        }

      return false;
    }

    _search(product){
        let code = product.getCode();
        for(let i = 0; i < this._inventory.length; i++){
            if(this.product[i].getCode() == code){
                return i;
            }
        }

      return -1;
    }
}