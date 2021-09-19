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
        let product = Product.readForm();

        if(this._inventory.length > 20){
            this._inventory._showActions("Almacenamiento lleno.");
            return;
        }
        
        if(!product){
            Swal.fire("ERROR", "Todos los campos deben ser llenados.", "error");
            return;
        }

        let added = this._inventory.addProduct(product);
        if(!added){
            Swal.fire("ATENCIÓN", "Este producto ya fue registrado.", "warning");
            return;
        }

        Swal.fire("LISTO", "El producto ha sido registrado con éxito.", "success");
    }

    _searchProduct = () => {
        let inpCode = document.querySelector("#code");
        let code = inpCode.value;
        this._inventory._searchProductByCode(code);
        inpCode.value = "";
    }
    
    _deleteProduct = () => {
        let inpCode = document.querySelector("#code");
        let code = inpCode.value;
        this._inventory._deleteProductByCode(code);
        inpCode.value = "";
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
}

new App();