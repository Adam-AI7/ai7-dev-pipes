// import { Observable } from 'rxjs/Observable';
// import {Product} from './Product'
 
 
export class ProductService{
 
    public getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(1,'Memory Card',500),
            new Product(2,'Pen Drive',750),
            new Product(3,'Power Bank',100)
        ]
 
        return products;               
    }
 
 
    public getProduct(id:number) {
        let products:Product[]=this.getProducts();
        return products.find(p => p.id==id);
    }
 
 
}
class Product{
    id:number=0;
    name:string='';
    price:number=0;
    constructor(id:number,name:string,price:number){
     this.id=id;
     this.name=name;
     this.price=price;
    }
}