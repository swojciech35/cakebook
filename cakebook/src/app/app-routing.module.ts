import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CakebookComponent} from "./components/cakebook/cakebook.component";

const routes: Routes = [{
  path: '',
  component:CakebookComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
