import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SavedComponent } from './pages/saved/saved.component';
import { CreateComponent } from './pages/create/create.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { MessagesComponent } from './pages/messages/messages.component';

export const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'explore', component: ExploreComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'messages', component: MessagesComponent
  },
  {
    path: 'saved', component: SavedComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
];
