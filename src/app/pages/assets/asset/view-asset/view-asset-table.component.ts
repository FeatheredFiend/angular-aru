import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../../_models';
import { UserService, AuthenticationService } from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

const Asset_Data: Asset[] = [
  { id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 2, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 3, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 4, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 2, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 3, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 4, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 2, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 3, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
  { id: 4, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
    
];

@Component({ selector: 'view-asset-table', templateUrl: 'view-asset-table.component.html' })
export class ViewAssetTableComponent {



    user: User = null;
  // Data for Top Row Asset Table
  displayedColumnsAssets: string[] = ['id', 'barcode', 'assetType','description','locationRoom','locationSite','isSentinel','isHealthcare','comment','isDecommissioned','dateDecommissioned','userDecommissioned'];
  dataSourceAssets = new MatTableDataSource(Asset_Data);



  // Sorting
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  static dataSourceAssets: any;
  
  ngOnInit() {
    this.dataSourceAssets.sort = this.sort;
    this.dataSourceAssets.paginator = this.paginator;
  }

  // Filtering for Top Row Asset Table
  applyFilterAssets(filterValue: string) {
    this.dataSourceAssets.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAssets.paginator) {
      this.dataSourceAssets.paginator.firstPage();
    }
  }

  test() {
    console.warn("test");
  }

    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }