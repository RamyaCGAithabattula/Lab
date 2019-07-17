import {Component,Input} from '@angular/core';

import {Router} from '@angular/router'
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{ 
   
   
    proId:any;
    proName:any;
    proCost:any;
    proOnline:any;
    proCategory:any;
    proStore:any;
    myalldata:any;

    addData(){
        console.log(this.proId,this.proName,this.proCost,this.proOnline,this.proCategory,this.proStore);
    }
    
 
}
