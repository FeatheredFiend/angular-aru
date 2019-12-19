import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../../_models';
import { UserService, AuthenticationService, AssetService } from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({ selector: 'add-asset', templateUrl: 'add-asset.component.html' })
export class AddAssetComponent implements OnInit {

  addAssetForm = new FormGroup({
    barcode: new FormControl(''),
    assetType: new FormControl(''),
    description: new FormControl(''),
    locationRoom: new FormControl(''),
    locationSite: new FormControl(''),
    isSentinel: new FormControl(''),
    isHealthcare: new FormControl(''),
    comment: new FormControl(''),
  });

  assets: Asset[];
  error = '';
  success = '';
  asset = new Asset('', '', '', '', '', '', '', '');
  constructor(
    private account: AuthenticationService,
    private assetService: AssetService,
    private router: Router
  ) {


  }


  ngOnInit() {
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
  addAsset(f) {
    this.error = '';
    this.success = '';

    this.assetService.store_addAsset(this.asset)
      .subscribe(
        (res: Asset[]) => {
          // Update the list of assets
          this.assets = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }
}


// some of the code in this file was copied and modified from https://material.angular.io/
// some of the code in this file was copied and modified from https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items