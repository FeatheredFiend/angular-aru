import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../../_models';
import { UserService, AuthenticationService , AssetService} from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

const Asset_Data: Asset[] = [
{ id: 1, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
{ id: 2, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
{ id: 3, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
{ id: 4, barcode: 'ARU', assetType: "Tap", description: "this is an Asset", locationRoom: 'ARU', locationSite: "Tap", isSentinel: "Yes", isHealthcare: 'ARU', comment: "Tap", isDecommissioned: "No", dateDecommissioned: '', userDecommissioned: "" },
];

@Component({ selector: 'edit-asset', templateUrl: 'edit-asset.component.html' })
export class EditAssetComponent {

  editAssetForm = new FormGroup({
    barcode: new FormControl(''),
    description: new FormControl(''),
    locationRoom: new FormControl(''),
    isSentinel: new FormControl(''),
    isHealthcare: new FormControl(''),
    comment: new FormControl(''),
    isDecommissioned: new FormControl(''),
  });

  assets: Asset[];
  error = '';
  success = '';
  asset = {id: 3};
    constructor(
      private account: AuthenticationService,
      private assetService: AssetService,
      private router: Router
    ) {
  
  
    }

    ngOnInit() {
      this.getAssets();
    }

    getAssets(): void  {
      this.assetService.getEdit().subscribe(
        (res: Asset[]) => {
          this.assets = res;
        },
        (err) => {
          this.error = err;
        }
      );
    }
 
    updateAsset(barcode, description, id) {
      this.success = '';
      this.error = '';
  
      this.assetService.update_editAsset({ barcode: barcode.value, description: description.value, id: id.value })
        .subscribe(
          (res) => {
            this.assets    = res;
            this.success = 'Updated successfully';
          },
          (err) => this.error = err
        );
        this.getAssets();
  }
  }

  
// some of the code in this file was copied and modified from https://material.angular.io/
// some of the code in this file was copied and modified from https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items