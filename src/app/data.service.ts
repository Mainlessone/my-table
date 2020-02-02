export class DataService {

    private products = [
        { id: 1, name : 'product 1', price : 100 },
        { id: 2, name : 'product 2', price : 200 },
        { id: 3, name : 'product 3', price : 300 },
        { id: 4, name : 'product 4', price : 400 },
        { id: 5, name : 'product 5', price : 500 },
        { id: 6, name : 'product 6', price : 600 },
        { id: 7, name : 'product 7', price : 700 },
        { id: 8, name : 'product 8', price : 800 },
        { id: 9, name : 'product 9', price : 900 },
        { id: 10, name : 'product 10', price : 1000 }
        ];

    getProducts() {
        return this.products
    }

    deleteProducts(product) {
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i] === product) {
                this.products.splice(i, 1);
                break
            }
    }
    
    }

    addTask(task:number, names:any, prices: number) {
        this.products.push({id: task, name: names, price:prices});
    }

}