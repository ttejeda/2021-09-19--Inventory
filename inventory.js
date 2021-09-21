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
            return `Agregado ${product.getName()}, código:${product.getCode()}.`;
        }

        return `Un producto con el código ${product.getCode()}, ya fue registrado.`;
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
            return `Producto encontrado. Código:${this._inventory[pos].getCode()}, nombre:${this._inventory[pos].getName()},
                                cantidad disponible:${this._inventory[pos].getAmount()}, precio individual:${this._inventory[pos].getCost()},
                                costo total:${this._inventory[pos].getTotal()}.`;
        }

        return "<i>Null</i>";
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
            return "<i>Coloca un código.</i>";
        }
        
        let pos = this._searchByCode(code);
        if(pos >= 0){
            let product = this._inventory[pos];
            for(let i = pos; i < this._inventory.length; i++){
                if(i == this._inventory.length - 1){
                    this._inventory[i] = product;
                    let a = this._inventory.pop();
                    return `Producto eliminado: ${a.getName()}, código:${a.getCode()}.`;
                }
                this._inventory[i] = this._inventory[i+1];
            }
        }

        return "<i>Null</i>";
    }

    _list(){
        if((this._inventory.length - 1) >= 0){
            let list = "<b>Listado de productos: </b>";
            for(let i = 0; i < this._inventory.length; i++){
                list = list + `<b>${i+1}</b>. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}. `;
            }
            return list;
        }

        return "Inventario vacío.";
    }

    _tsil(){
        let tsil = "<b>Listado de produtos(inverso):</b>";
        if((this._inventory.length - 1) >= 0){
            for(let i = (this._inventory.length - 1); i >= 0; i--){
                tsil +=`<b>${i+1}</b>. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}. `;
            }
            return tsil;
        }

        return "Inventario vacío.";
    }

    _insertProduct(product, position){
        if(this._inventory.length < position){
            return "Esa posición no existe.";
        }
        let name = product.getName();

        let ab;
        for(position; position <= this._inventory.length + 1; position++){
            if(position == this._inventory.length){
                this._inventory.push(product);
                return `Insertado ${name} en ${position}`;
            }
            ab = this._inventory[position];
            this._inventory[position] = product;
            product = ab;
        }
    }
}