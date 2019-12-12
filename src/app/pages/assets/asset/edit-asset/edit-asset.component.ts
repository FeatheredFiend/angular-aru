import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../../_models';
import { UserService, AuthenticationService } from '../../../../_services';
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

  profileForm = new FormGroup({
    barcode: new FormControl(''),
    description: new FormControl(''),
    locationRoom: new FormControl(''),
    isSentinel: new FormControl(''),
    isHealthcare: new FormControl(''),
    comment: new FormControl(''),
    isDecommissioned: new FormControl(''),
  });


    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }