import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { Component, NgModule, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { RegisterUser } from '../../../_models';
import { RegisterUserService, AuthenticationService} from '../../../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({ selector: 'add-user', templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

  addUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
  });

  users: RegisterUser[];
  error = '';
  success = '';
  user = new RegisterUser(0, '', '', '', '','','');
  constructor(
    private account: AuthenticationService,
    private userRegisterService: RegisterUserService,
    private router: Router
  ) {

 
  }


  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.userRegisterService.getAll().subscribe(
      (res: RegisterUser[]) => {
        this.users = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addUser(f) {
    this.error = '';
    this.success = '';

    this.userRegisterService.store_addUser(this.user)
      .subscribe(
        (res: RegisterUser[]) => {
          // Update the list of assets
          this.users = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }
}