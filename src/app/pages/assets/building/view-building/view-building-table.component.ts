import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Building } from '../../../../_models';
import { UserService, AuthenticationService, BuildingService } from '../../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { setupScriptLoaderService } from 'angular-google-charts/lib/google-charts.module';
const Building_Data: Building[] = [
  { id: 1, name: 'ARU', organisation: "Tap" },
  { id: 2, name: 'ARU', organisation: "Tap" },
  { id: 3, name: 'ARU', organisation: "Tap" },
  { id: 4, name: 'ARU', organisation: "Tap" },

];

@Component({ selector: 'view-building-table', templateUrl: 'view-building-table.component.html' })
export class ViewBuildingTableComponent implements OnInit {


  buildings: Building[];
  error = '';
  success = '';
  row_id = '';
  building = new Building(0, '', '');
    user: User = null;
  // Data for Top Row Building Table
  displayedColumnsBuildings: string[] = ['id', 'name', 'organisation'];
  dataSourceBuildings = new MatTableDataSource(Building_Data);



  // Sorting
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // static dataSourceBuildings: any;
  
  ngOnInit() {
    this.dataSourceBuildings.sort = this.sort;
    this.dataSourceBuildings.paginator = this.paginator;
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

  // Filtering for Top Row Building Table
  applyFilterBuildings(filterValue: string) {
    this.dataSourceBuildings.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceBuildings.paginator) {
      this.dataSourceBuildings.paginator.firstPage();
    }
  }

  getRecord(row) {
    console.log(row.id);
  }

    constructor(
      private account: AuthenticationService, 
      private buildingService: BuildingService, 
      private router: Router
    ) {
  
  
    }

  }

  // some of the code in this file was copied and modified from https://material.angular.io/
// some of the code in this file was copied and modified from https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items