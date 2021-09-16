export default class Inventory{

    constructor(){
        this._inventory = new Array();
    }

    addProduct(product){
        let pos = this._search(product);
        if(pos == -1){
            this._inventory.push(product);
            this._showActions(product);
            return true;
        }

      return false;
    }

    _search(product){
        let code = product.getCode();
        for(let i = 0; i < this._inventory.length; i++){
            if(this._inventory[i].getCode() == code){
                return i;
            }
        }

      return -1;
    }

    _showActions(product){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = `<p>Agregado ${product.getName()}, código:${product.getCode()}.</p>`;
        this._console.appendChild(action);
    }
    
    _noMore(){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = "<p>Almacenamiento lleno.</p>";
        this._console.appendChild(action);
    }

    _searchProductByCode(code){
        for(let i = 0; i < this._inventory.length; i++){
            if(this._inventory[i].getCode() == code){
                this._productShow(i);
                return;
            }
        }

        this._productNull();
    }

    _productShow(i){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = `<p>Producto encontrado. Código:${this._inventory[i].getCode()}, nombre:${this._inventory[i].getName()},
                            cantidad disponible:${this._inventory[i].getAmount()}, precio individual:${this._inventory[i].getCost()},
                            costo total:${this._inventory[i].getTotal()}</p>`;
        this._console.appendChild(action);
    }

    _productNull(){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = "<p><i>Null</i></p>"
        this._console.appendChild(action);
    }
}