import { FormGroup, FormControl } from '@angular/forms';

import { Component,NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Asset } from '../../../_models';
import { UserService, AuthenticationService } from '../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({ templateUrl: 'assets-building.component.html' })
export class AssetsBuildingComponent {






    constructor(
      private account: AuthenticationService, 
      private router: Router
    ) {
  
  
    }

  }