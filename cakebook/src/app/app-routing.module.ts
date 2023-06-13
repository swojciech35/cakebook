import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CakebookComponent} from "./components/cakebook/cakebook.component";
import {CakebookHomeComponent} from "./components/cakebook-home/cakebook-home.component";
import {CakebookItemDetailsComponent} from "./components/cakebook-item-details/cakebook-item-details.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [{
  path: '',
  component: CakebookHomeComponent,


},
  {
    path: 'recipe/detail/:id',
    component: CakebookItemDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
