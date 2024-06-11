import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";

export const stopRoute : CanActivateChildFn=(Aroute,routeS)=>{
    let a = true;
  return new Promise((res,rej)=>{
    setTimeout(()=>{
    //    let router = inject(Router);
    //    res(router.parseUrl('/home'));
    res(true)
        
       
    },3000)
  })
}