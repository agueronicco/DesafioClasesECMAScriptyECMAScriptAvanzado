class ProductManager{
    #gananciasImpuesto = 0.75;

    constructor (){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock)=> {
        const product = {
            title,
            description,
            price: price+price*this.#gananciasImpuesto,
            thumbnail,
            code,
            stock
        };
        
        const codeIndex = this.products.findIndex(e=>e.code === code);
        if(codeIndex != -1){
            console.log("El producto esta repetido");
            return;
        };
        if(this.products.length == 0){
            product.id = 1;
        }else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product)
    }
    getProducybyId = (idProduct) => {
        const eventoIndex = this.products.findIndex(e=>e.id === idProduct);
        console.log(eventoIndex);

        if (eventoIndex === -1){
            console.log('not found');
            return;
        } else{
            console.log(this.products[eventoIndex]);
        };
    }
}

const agregadorProductos = new ProductManager();
/* console.log(agregadorProductos.getProducts()); */
agregadorProductos.addProduct('samsung', 's21 fe 5g', 220000, 'https://shop.samsung.com/ar/celular-galaxy-s21-fe-5g/p?skuId=131782', 1 , 8);
/* console.log(agregadorProductos.getProducts()); */
agregadorProductos.addProduct('samsung', 's21 fe 5g', 220000, 'https://shop.samsung.com/ar/celular-galaxy-s21-fe-5g/p?skuId=131782', 1 , 8);
/* console.log(agregadorProductos.getProducts()); */
agregadorProductos.getProducybyId(2);