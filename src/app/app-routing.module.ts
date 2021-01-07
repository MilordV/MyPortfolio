import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoaderComponent } from './@templates/loader/loader.component';
import { NotFoundComponent } from './@templates/not-found/not-found.component';
import { DashboardComponent } from './@views/dashboard/dashboard.component';
import { HomeComponent } from './@views/home/home.component';
import { DelayResolve } from './Resolvers/delay.resolver';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,resolve:{delay:DelayResolve}},
  //{path:"dashboard",component:DashboardComponent,resolve:{delay:DelayResolve}},
  {path:"**",redirectTo:"NotFound",pathMatch:"full"},
  {path:"NotFound",component:NotFoundComponent,resolve:{delay:DelayResolve}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routesComponents = [HomeComponent,DashboardComponent,LoaderComponent]
