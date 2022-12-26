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
import { BlogsComponent } from './blogs/blogs.component';
import { AddressComponent } from './address/address.component';
import { AwardComponent } from './award/award.component';
import { FhelpadviceComponent } from './fhelpadvice/fhelpadvice.component';
import { FservicesComponent } from './fservices/fservices.component';
import { FhiredevlComponent } from './fhiredevl/fhiredevl.component';
import { InquieryComponent } from './inquiery/inquiery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    TaglineclientratingComponent,
    BlogsComponent,
    AddressComponent,
    AwardComponent,
    FhelpadviceComponent,
    FservicesComponent,
    FhiredevlComponent,
    InquieryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
