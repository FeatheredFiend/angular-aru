import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { DashboardComponent } from './pages/dashboard';
import { ProfileComponent } from './pages/admin/profile';
import { RegisterComponent } from './pages/admin/register';
import { AssetsAssetComponent } from './pages/assets/asset';
import { AssetsBuildingComponent } from './pages/assets/building';


import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'assets', component: AssetsAssetComponent },
    { path: 'buildings', component: AssetsBuildingComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);