import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../../_models';
import { UserService, AuthenticationService, AssetService } from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { setupScriptLoaderService } from 'angular-google-charts/lib/google-charts.module';
const Asset_Data: Asset[] = [
  { id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 2, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 3, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 4, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },

];
 
@Component({ selector: 'view-asset-table', templateUrl: 'view-asset-table.component.html' })
export class ViewAssetTableComponent implements OnInit {


  assets: Asset[];
  error = '';
  success = '';
  row_id = '';
  asset = new Asset('', '', '', '', '', '', '', '');
    user: User = null;
  // Data for Top Row Asset Table
  displayedColumnsAssets: string[] = ['id', 'barcode', 'assetType','description','locationRoom','locationSite','isSentinel','isHealthcare','comment','isDecommissioned','dateDecommissioned','userDecommissioned'];
  dataSourceAssets = new MatTableDataSource(Asset_Data);



  // Sorting
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // static dataSourceAssets: any;
  
  ngOnInit() {
    this.dataSourceAssets.sort = this.sort;
    this.dataSourceAssets.paginator = this.paginator;
    this.getAssets();
  }
  getAssets(): void {
    this.assetService.getAll().subscribe(
      (res: Asset[]) => {
        this.assets = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  // Filtering for Top Row Asset Table
  applyFilterAssets(filterValue: string) {
    this.dataSourceAssets.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAssets.paginator) {
      this.dataSourceAssets.paginator.firstPage();
    }
  }

  getRecord(row) {
    console.log(row.id);
  }

    constructor(
      private account: AuthenticationService, 
      private assetService: AssetService, 
      private router: Router
    ) {
  
  
    }

  }

  
// some of the code in this file was copied and modified from https://material.angular.io/