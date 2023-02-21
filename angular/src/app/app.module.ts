import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HeaderComponent } from './component/header/header.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';



@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,
    NgConfirmModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
