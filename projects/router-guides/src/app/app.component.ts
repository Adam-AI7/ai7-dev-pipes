import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'router-guides';
  obs$=of(1,2,'t',3);
  ngOnInit(): void {
  //   this.obs$.subscribe((data:any)=>{
  //     if(isNaN(data))throw new Error('it is not number');
  //   // if(data==2){let a=b;}
  //     console.log(Math.floor(data*2),'appcomponent')
  // },err=>{
    
  // })
}
}
