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
            this._inventory._showActions("Almacenamiento lleno.");
            return;
        }
        
        if(!product){
            this._inventory._showActions("¡Se deben de llenar todos los campos!");
            return;
        }

        this._inventory.addProduct(product);
    }

    _searchProduct = () => {
        let code = this._getCodeForm();
        this._inventory._searchProductByCode(code);
    }
    
    _deleteProduct = () => {
        let code = this._getCodeForm();
        this._inventory._deleteProductByCode(code);
    }

    _listProducts = () => {
        this._inventory._list();
    }

    _tsilProducts = () => {
        this._inventory._tsil();
    }

    _insert = () => {
        let inpInsert = document.querySelector("#position");
        let insert = Number(inpInsert.value);

        if(!insert || insert == 0){
            this._inventory._showActions("Coloca una posición.");
            return;
        }

        inpInsert.value = "";
        let product = Product.readForm();
        if(!product){
            this._inventory._showActions("Inserta los datos necesarios.");
            return;
        }
        this._inventory._insertProduct(product, insert - 1);
    }

    _getCodeForm(){
        let inpCode = document.querySelector("#code");
        let code = inpCode.value;
        inpCode.value = "";
        return code;
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