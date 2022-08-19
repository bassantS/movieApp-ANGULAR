import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvDetailsComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((x)=> x.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
