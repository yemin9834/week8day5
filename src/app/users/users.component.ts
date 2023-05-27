import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {


  users!: any[];
  // addedUser!: any[];


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        // this.addedUser = this.userService.getAllUsers();
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
    // this.users = this.userService.getAllUsers();

    // this.userService.getUsers().subscribe(users => {
    //   this.users = users;
    //   console.log(this.users);
    // });


    // this.userService.getAllUsers().subscribe(addedUser => {
    //   this.addedUser = addedUser;
    //   console.log(this.addedUser);
    // });


  }


}
