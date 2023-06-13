import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakebookComponent } from './components/cakebook/cakebook.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { CakebookItemComponent } from './components/cakebook-item/cakebook-item.component';
import { CakebookItemImageComponent } from './components/cakebook-item-image/cakebook-item-image.component';
import { CakebookItemTextComponent } from './components/cakebook-item-text/cakebook-item-text.component';
import { CakebookItemDirectionsComponent } from './components/cakebook-item-directions/cakebook-item-directions.component';
import { CakebookItemIngredientsComponent } from './components/cakebook-item-ingredients/cakebook-item-ingredients.component';
import { CakebookItemTitleComponent } from './components/cakebook-item-title/cakebook-item-title.component';
import { CakebookItemRecipeinfoComponent } from './components/cakebook-item-recipeinfo/cakebook-item-recipeinfo.component';
import { CakebookItemDetailsComponent } from './components/cakebook-item-details/cakebook-item-details.component';

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
    CakebookItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
