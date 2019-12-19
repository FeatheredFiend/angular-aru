import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LayoutComponent } from './layout';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { DashboardComponent } from './pages/dashboard';
import { BuildingDashboardComponent } from './pages/dashboard/building-table';
import { JobDashboardComponent } from './pages/dashboard/job-table';
import { ProfileComponent } from './pages/admin/profile';
import { RegisterComponent } from './pages/admin/register';
import { AssetsAssetComponent,AddAssetComponent, EditAssetComponent, ViewAssetTableComponent } from './pages/assets';
import { AssetsBuildingComponent,AddBuildingComponent, EditBuildingComponent, ViewBuildingTableComponent } from './pages/assets';

import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        appRoutingModule,
        GoogleChartsModule,
        DemoMaterialModule,
        MatNativeDateModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        BuildingDashboardComponent,
        JobDashboardComponent,
        ProfileComponent,
        RegisterComponent,
        AssetsAssetComponent,
        ViewAssetTableComponent,
        AddAssetComponent,
        EditAssetComponent,
        AssetsBuildingComponent,
        ViewBuildingTableComponent,
        AddBuildingComponent,
        EditBuildingComponent
    ],
    exports: [

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }