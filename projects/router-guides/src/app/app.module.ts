import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,CommonModule,FormsModule,RouterModule.forRoot([{
      path:'',
      redirectTo:'home',
      pathMatch:'full',
      
    },
    {
      path:'home',
      component:HomeComponent
    },{
      path:'products',
     loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
    }
    // {
    //   path:'product',
    //   loadChildren:
    // }
  
  ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
