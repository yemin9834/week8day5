import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nameForm! : FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.nameForm = this.fb.group({
      name: ''
    });
  }

  onSubmit() {
    const name = this.nameForm.value.name;
    this.userService.addUser(name);
    this.nameForm.reset();
    this.userService.getAllUsers().subscribe(addedUser => { console.log(addedUser); });
    console.log("added user");

  }

}
