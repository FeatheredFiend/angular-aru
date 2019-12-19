import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Building } from '../../../../_models';
import { UserService, AuthenticationService , BuildingService} from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

const Building_Data: Building[] = [
  { id: 1, name: 'ARU', organisation: "Tap" },
  { id: 2, name: 'ARU', organisation: "Tap" },
  { id: 3, name: 'ARU', organisation: "Tap" },
  { id: 4, name: 'ARU', organisation: "Tap" }

];

@Component({ selector: 'edit-building', templateUrl: 'edit-building.component.html' })
export class EditBuildingComponent {

  editBuildingForm = new FormGroup({
    name: new FormControl(''),
    organisation: new FormControl(''),
  });

  buildings: Building[];
  error = '';
  success = '';
  building = {id: 3};
    constructor(
      private account: AuthenticationService,
      private buildingService: BuildingService,
      private router: Router
    ) {
  
  
    }

    ngOnInit() {
      this.getBuildings();
    }

    getBuildings(): void  {
      this.buildingService.getEdit().subscribe(
        (res: Building[]) => {
          this.buildings = res;
        },
        (err) => {
          this.error = err;
        }
      );
    }
 
    updateBuilding(name, organisation, id) {
      this.success = '';
      this.error = '';
  
      this.buildingService.update_editBuilding({ name: name.value, organisation: organisation.value, id: id.value })
        .subscribe(
          (res) => {
            this.buildings    = res;
            this.success = 'Updated successfully';
          },
          (err) => this.error = err
        );
        this.getBuildings();
  }
  }
  // some of the code in this file was copied and modified from https://material.angular.io/
// some of the code in this file was copied and modified from https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items