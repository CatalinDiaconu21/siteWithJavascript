let sortare = document.querySelector(ID_SORTARE);


class Controller {
    constructor (items, view, viewBascket) {
        this.items = items;

        
        this.sortare = document.querySelector(ID_SORTARE);
        this.data = document.querySelector(ID_DATA);
        this.sortare.addEventListener("change", this.onSort);
        this.data.addEventListener("click", this.onAdd);
        this.view = view;
        this.view.update(this.items);
        
        this.viewBascket = viewBascket;
        this.basketItems = [];
        this.iteme = document.querySelector(ID_ITEMS);
        this.iteme.addEventListener("click", this.removeCartItem);
        this.it = document.querySelector(ID_ITEMS);
        this.it.addEventListener("change", this.changeQuantity);
        this.viewBascket.updatare(this.basketItems);

    }

    onSort = (event) => {
        let cmp = this[event.target.value];
        if (cmp) {
            this.items.sort(cmp);
            this.view.update(this.items);
        }
    } 

    onAdd = (event) => {

        let index = event.target.dataset["index"];
        
        let product = this.items[index];
        let findBasket = this.basketItems.find(o => o.name === product.name);
        if (findBasket) {
            product.cantitate++;
        } else {
            product.cantitate = 1;
            this.basketItems.push(product);
            
        }
        
        this.viewBascket.updatare(this.basketItems);
    }

    removeCartItem = (event) => {
        let index = event.target.dataset["index"];
        if (index) {
        this.basketItems.splice(index, 1);
        this.viewBascket.updatare(this.basketItems);
        }
    }

    changeQuantity = (event) => {
        let button = event.target.value;
        let index = event.target.parentNode.querySelector(CLS_REMOVE).dataset["index"];
        let product = this.basketItems[index];
        let findBasket = this.basketItems.find( o => o.name === product.name);
        if (button) {
            if (findBasket) {
                product.cantitate = button;
            }
        }
        this.viewBascket.updatare(this.basketItems); 
    }

    cmpNumeCrescator(c1, c2) {
        if (c1.name > c2.name) {
            return 1;
        } else if (c1.name < c2.name) {
            return -1;
        }

        return 0;
    }

    cmpNumeDescrescator(c1, c2) {
        if (c1.name > c2.name) {
            return -1;
        } else if (c1.name < c2.name) {
            return 1;
        }

        return 0;
    }

    cmpPretCrescator(c1, c2) {
        if (c1.price > c2.price) {
            return 1;
        } else if (c1.price < c2.price) {
            return -1;
        }

        return 0;
    }

    cmpPretDescrescator(c1, c2) {
        if (c1.price > c2.price) {
            return -1;
        } else if (c1.price < c2.price) {
            return 1;
        }

        return 0;
    }
}


let controller = new Controller(data.items, new View(), new ViewBasket());