import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CakebookComponent} from "./components/cakebook/cakebook.component";
import {CakebookHomeComponent} from "./components/cakebook-home/cakebook-home.component";

const routes: Routes = [{
  path: '',
  component:CakebookHomeComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
