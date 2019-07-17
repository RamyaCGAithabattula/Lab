import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {AddEmployeeComponent} from './app.addemployee';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
const routes:Routes=[

    {path:"add",component:AddEmployeeComponent},

];
@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }