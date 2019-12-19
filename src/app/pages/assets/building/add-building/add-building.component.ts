import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Building } from '../../../../_models';
import { UserService, AuthenticationService, BuildingService } from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({ selector: 'add-building', templateUrl: 'add-building.component.html' })
export class AddBuildingComponent implements OnInit {

  addBuildingForm = new FormGroup({
    barcode: new FormControl(''),
    organisation: new FormControl(''),
  });

  buildings: Building[];
  error = '';
  success = '';
  building = new Building(0,'', '');
  constructor(
    private account: AuthenticationService,
    private buildingService: BuildingService,
    private router: Router
  ) {


  }


  ngOnInit() {
    this.getBuildings();
  }


  getBuildings(): void {
    this.buildingService.getAll().subscribe(
      (res: Building[]) => {
        this.buildings = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addBuilding(f) {
    this.error = '';
    this.success = '';

    this.buildingService.store_addBuilding(this.building)
      .subscribe(
        (res: Building[]) => {
          // Update the list of buildings
          this.buildings = res;

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