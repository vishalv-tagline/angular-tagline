import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpriencerightComponent } from './exprienceright/exprienceright.component';
import { ExprienceleftComponent } from './exprienceleft/exprienceleft.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    OurservicesComponent,
    NavbarComponent,
    ExpriencerightComponent,
    ExprienceleftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
