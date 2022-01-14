class View  {
    constructor() {
        
        this.template = document.querySelector(ID_PRODUCT_TEMPLATE).content;
        this.produse = document.querySelector(ID_DATA);

        
    }

    update(items) {
        this.produse.textContent = "";

        const fragment = document.createDocumentFragment();

        let index = 0;
        for (let crt of items) {
            let produs = this.template.cloneNode(true);
        
            produs.querySelector(CLS_NAME).textContent = crt.name;
            produs.querySelector(CLS_PRET).textContent = crt.price;
            produs.querySelector(CLS_IMAGE).setAttribute("src", crt.image);
            produs.querySelector(CLS_ADD).setAttribute("data-index", index++);
            fragment.appendChild(produs);
        }

        this.produse.appendChild(fragment);
    }
}



class ViewBasket {
    constructor() {
        this.basket = document.querySelector(ID_COS_TEMPLATE).content;
        // this.date = document.querySelector(ID_DATA);
        this.iteme = document.querySelector(ID_ITEMS);
        
    }

    updatare(items) {
        this.iteme.textContent = "";
        this.items = items;
        
        const frag = document.createDocumentFragment();
        
        let index = 0;
        for (let val of items) {
            let prod = this.basket.cloneNode(true);

            prod.querySelector(CLS_NAME).textContent = val.name;
            prod.querySelector(CLS_PRET).textContent = val.price;
            prod.querySelector(CLS_CANTITATE).value = val.cantitate;
            prod.querySelector(CLS_TOTAL).textContent = (val.price * val.cantitate).toFixed(2);
            prod.querySelector(CLS_REMOVE).setAttribute("data-index", index++);
            frag.appendChild(prod);
        }
        
        this.iteme.appendChild(frag);
        let total = this.items.reduce((total, val) => total += (val.price * val.cantitate), 0);
        document.querySelector(ID_TOTAL_COS).textContent = total.toFixed(2);
    }
}