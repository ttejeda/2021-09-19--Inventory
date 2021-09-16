import Product from "./product.js";
import Inventory from "./inventory.js";

class App{

    constructor(){
        this._inventory = new Inventory();
        let btnAdd = document.querySelector("#btnAdd");
        let btnSearch = document.querySelector("#btnSearch");
        let btnCancel = document.querySelector("#btnCancel");
        let btnDelete = document.querySelector("#btnDelete");
        let btnList = document.querySelector("#btnList");
        let btnTsil = document.querySelector("#btnTsil");
        btnAdd.addEventListener("click", this._addProduct);
        btnSearch.addEventListener("click", this._searchProduct);
        btnCancel.addEventListener("click", this._cancel);
        btnDelete.addEventListener("click", this._deleteProduct);
        btnList.addEventListener("click", this._listProducts);
        btnTsil.addEventListener("click", this._tsilProducts);
    }
    
    _addProduct = () => {
        let product = Product.readForm();

        if(this._inventory.lenght > 20){
            this._inventory.noMore();
        }
        
        if(!product){
            Swal.fire("ERROR", "Todos los campos deben ser llenados.", "error");
            return;
        }

        let added = this._inventory.addProduct();
        if(!added){
            Swal.fire("ATENCIÓN", "Este producto ya fue registrado.", "warning");
            return;
        }

        Swal.fire("LISTO", "El producto ha sido registrado con éxito.", "success");
    }
}

new App();