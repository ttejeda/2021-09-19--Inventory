import Product from "./product.js";
import Inventory from "./inventory.js";

class App{

    constructor(){
        this._inventory = new Inventory();
        let btnAdd = document.querySelector("#btnAdd");
        let btnSearch = document.querySelector("#btnSearch");
        let btnDelete = document.querySelector("#btnDelete");
        let btnList = document.querySelector("#btnList");
        let btnTsil = document.querySelector("#btnTsil");
        let btnInsert = document.querySelector("#btnInsert");
        btnAdd.addEventListener("click", this._addProduct);
        btnSearch.addEventListener("click", this._searchProduct);
        btnDelete.addEventListener("click", this._deleteProduct);
        btnList.addEventListener("click", this._listProducts);
        btnTsil.addEventListener("click", this._tsilProducts);
        btnInsert.addEventListener("click", this._insert);
    }
    
    _addProduct = () => {
        let product = this.readForm();

        if(this._inventory.length > 20){
            this._showActions("Almacenamiento lleno.");
            return;
        }
        
        if(!product){
            this._showActions("¡Se deben de llenar todos los campos!");
            return;
        }

        let result = this._inventory.addProduct(product);
        this._showActions(result);
    }

    _searchProduct = () => {
        let code = this._getCodeForm();
        let result = this._inventory._searchProductByCode(code);
        this._showActions(result);
    }
    
    _deleteProduct = () => {
        let code = this._getCodeForm();
        let result = this._inventory._deleteProductByCode(code);
        this._showActions(result);
    }

    _listProducts = () => {
        let result = this._inventory._list();
        this._showActions(result);
    }

    _tsilProducts = () => {
        let result = this._inventory._tsil();
        this._showActions(result);
    }

    _insert = () => {
        let inpInsert = document.querySelector("#position");
        let insert = Number(inpInsert.value);

        if(!insert || insert == 0){
            this._showActions("Coloca una posición.");
            return;
        }

        inpInsert.value = "";
        let product = this.readForm();
        if(!product){
            this._showActions("Inserta los datos necesarios.");
            return;
        }
        let result = this._inventory._insertProduct(product, insert - 1);
        this._showActions(result);
    }

    _getCodeForm(){
        let inpCode = document.querySelector("#code");
        let code = inpCode.value;
        inpCode.value = "";
        return code;
    }

    _showActions(message){
        this._console = document.querySelector("#console");
        let action = document.createElement("p");
        action.innerHTML = `<p>${message}</p>`;
        this._console.appendChild(action);
    }

    readForm(){
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

new App();