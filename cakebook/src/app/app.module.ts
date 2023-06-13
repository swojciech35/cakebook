import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CakebookComponent} from './components/cakebook/cakebook.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {CakebookItemComponent} from './components/cakebook-item/cakebook-item.component';
import {CakebookItemImageComponent} from './components/cakebook-item-image/cakebook-item-image.component';
import {CakebookItemTextComponent} from './components/cakebook-item-text/cakebook-item-text.component';
import {
  CakebookItemDirectionsComponent
} from './components/cakebook-item-directions/cakebook-item-directions.component';
import {
  CakebookItemIngredientsComponent
} from './components/cakebook-item-ingredients/cakebook-item-ingredients.component';
import {CakebookItemTitleComponent} from './components/cakebook-item-title/cakebook-item-title.component';
import {
  CakebookItemRecipeinfoComponent
} from './components/cakebook-item-recipeinfo/cakebook-item-recipeinfo.component';
import {CakebookItemDetailsComponent} from './components/cakebook-item-details/cakebook-item-details.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {CakebookHomeComponent} from './components/cakebook-home/cakebook-home.component';

import {FilterTitlePipe} from './pipes/filter-title.pipe';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CakebookComponent,
    CakebookItemComponent,
    CakebookItemImageComponent,
    CakebookItemTextComponent,
    CakebookItemDirectionsComponent,
    CakebookItemIngredientsComponent,
    CakebookItemTitleComponent,
    CakebookItemRecipeinfoComponent,
    CakebookItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    CakebookHomeComponent,

    FilterTitlePipe,
     LoginComponent,
     SignupComponent,
     NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
