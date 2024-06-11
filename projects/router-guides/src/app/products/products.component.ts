import {Component}from '@angular/core';
import { ProductService } from './products.service';

@Component({
    selector:"app-products",
    template:`
    Products List
    <div >{{product.id}}--{{product.name}}--{{product.price}}</div>
    
    `
})
export class ProductsComponent{
    product={
        id:0,
        name:'mobile',
        price:10000,
    }
    productsList:any=this.proservice.getProducts()
 constructor(private proservice:ProductService){
    
 }
}