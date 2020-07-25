import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './components/text/text.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'room/:id', component: TextComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
