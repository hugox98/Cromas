import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsUsersComponent } from './components/details-users/details-users.component';
import { ListUsersComponent } from './components/expert/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailsLotesComponent } from './components/details-lotes/details-lotes.component';
import { DetailsImageComponent } from './components/details-image/details-image.component';


const routes: Routes = [
  {path: '', component: HomeComponent}, /* pagina principal */
  {path: 'user/:id', component: DetailsUsersComponent}, /*Detalles de usuario*/
  {path: 'expert/list-users', component: ListUsersComponent}, /*only experts auth*/
  {path: 'user/login/login', component: LoginComponent},      /*Aqui va tu parte chencho*/
  {path: 'user/register/register', component: RegisterComponent}, /*aqui tambien*/
  {path: 'user/profile/profile', component: ProfileComponent}, /*TO DO: only experts auth*/
  {path: 'muestra/:id', component: DetailsLotesComponent},   /*Imagen detils*/
  {path: 'croma/:id', component: DetailsImageComponent},    /*imagen del croma*/
  {path: '**', component: Page404Component},                /* pagina de error */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
