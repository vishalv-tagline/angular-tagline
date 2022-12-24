import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpriencerightComponent } from './exprienceright/exprienceright.component';
import { ExprienceleftComponent } from './exprienceleft/exprienceleft.component';
import { TechnologinamesComponent } from './technologinames/technologinames.component';
import { TechnobackComponent } from './technoback/technoback.component';
import { TechnofrontComponent } from './technofront/technofront.component';
import { TaglineexpcardComponent } from './taglineexpcard/taglineexpcard.component';
import { TaglineclientratingComponent } from './taglineclientrating/taglineclientrating.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    OurservicesComponent,
    NavbarComponent,
    ExpriencerightComponent,
    ExprienceleftComponent,
    TechnologinamesComponent,
    TechnobackComponent,
    TechnofrontComponent,
    TaglineexpcardComponent,
    TaglineclientratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
