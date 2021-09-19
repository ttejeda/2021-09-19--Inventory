export default class Inventory{

    constructor(){
        this._inventory = new Array();
    }
    
    getLength(){
        return this._inventory.length;
    }

    addProduct(product){
        let pos = this._search(product);
        if(pos == -1){
            this._inventory.push(product);
            this._showActions(`Agregado ${product.getName()}, código:${product.getCode()}.`);
            return;
        }

        this._showActions(`Un producto con el código ${product.getCode()}, ya fue registrado.`);
        return;
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

    _searchProductByCode(code){
        let pos = this._searchByCode(code);
        if(pos >= 0){
            this._showActions(`Producto encontrado. Código:${this._inventory[pos].getCode()}, nombre:${this._inventory[pos].getName()},
                                cantidad disponible:${this._inventory[pos].getAmount()}, precio individual:${this._inventory[pos].getCost()},
                                costo total:${this._inventory[pos].getTotal()}.`);
            return;
        }

        this._showActions("<i>Null</i>");
    }

    _showActions(message){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = `<p>${message}</p>`;
        this._console.appendChild(action);
    }

    _searchByCode(code){
        for(let i = 0; i < this._inventory.length; i++){
            if(this._inventory[i].getCode() == code){
                return i;
            }
        }

        return -1;
    }

    _deleteProductByCode(code){
        if(!code){
            this._showActions("<i>Coloca un código.</i>");
            return;
        }
        
        let pos = this._searchByCode(code);
        if(pos >= 0){
            let product = this._inventory[pos];
            for(let i = pos; i < this._inventory.length; i++){
                if(i == this._inventory.length - 1){
                    this._inventory[i] = product;
                    let a = this._inventory.pop();
                    this._showActions(`Producto eliminado: ${a.getName()}, código:${a.getCode()}.`);
                    return;
                }
                this._inventory[i] = this._inventory[i+1];
            }
        }

        this._showActions("<i>Null</i>");
    }

    _list(){
        if((this._inventory.length - 1) >= 0){
            this._showActions("<b>Listado de productos:</b>");
            for(let i = 0; i < this._inventory.length; i++){
                this._showActions(`${i+1}. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}.`);
            }
            return;
        }

        this._showActions("Inventario vacío.");
    }

    _tsil(){
        if((this._inventory.length - 1) >= 0){
            this._showActions("<b>Listado de produtos(inverso):</b>");
            for(let i = (this._inventory.length - 1); i >= 0; i--){
                this._showActions(`${i+1}. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}.`);
            }
            return;
        }

        this._showActions("Inventario vacío.");
    }

    _insertProduct(product, position){
        if(this._inventory.length < position){
            this._showActions("Esa posición no existe.");
            return;
        }

        let ab;
        for(position; position < (this._inventory.length + 1); position++){
            if(position == this._inventory.length){
                this._inventory.push(product);
                this._showActions(`Insertado ${product.getName()} en ${position}`);
                return;
            }
            ab = this._inventory[position];
            this._inventory[position] = product;
            product = ab;
        }
    }
}