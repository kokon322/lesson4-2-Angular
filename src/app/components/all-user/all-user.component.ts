import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  allUsers: User[];
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.allUsers = value;
    });
  }

  ngOnInit(): void {
  }

}
