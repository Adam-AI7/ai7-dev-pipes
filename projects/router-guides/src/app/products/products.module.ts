import {Component, NgModule}from '@angular/core';
import { ProductService } from './products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list.component';
import { stopRoute } from '../router-gaurds/can-activate.gaurd';

@NgModule({
    imports:[ RouterModule.forChild([{
        path:'',
        component:ProductsComponent,
        canActivate:[stopRoute],

        children:[
            {
                path:'list',
                component:ProductsListComponent,
            }
        ]
    }])],
    exports:[],
    providers:[ProductService]
})
export class ProductsModule {



}

// import {Component}from '@angular/core';
// import { ProductService } from './products.service';

