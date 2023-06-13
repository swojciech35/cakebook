import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CakebookComponent} from "./components/cakebook/cakebook.component";
import {CakebookHomeComponent} from "./components/cakebook-home/cakebook-home.component";
import {CakebookItemDetailsComponent} from "./components/cakebook-item-details/cakebook-item-details.component";

const routes: Routes = [{
  path: '',
  component: CakebookHomeComponent

},
  {
    path: 'recipe/detail/:id',
    component: CakebookItemDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
