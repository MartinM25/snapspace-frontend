import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SavedComponent } from './pages/saved/saved.component';
import { CreateComponent } from './pages/create/create.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { MessagesComponent } from './pages/messages/messages.component';

export const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'explore', component: ExploreComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'saved', component: SavedComponent, canActivate: [AuthGuard]
  },
  {
    path: 'create', component: CreateComponent, canActivate: [AuthGuard]
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
];
