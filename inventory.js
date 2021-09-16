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

    showActions(product){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = `<p>Agregado ${product.getName()}(${this.product.getCode()})</p>`;
        this._console.appendChild(action);
    }
    
    noMore(){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = "<p>Almacenamiento lleno.</p>";
        this._console.appendChild(action);
    }
}