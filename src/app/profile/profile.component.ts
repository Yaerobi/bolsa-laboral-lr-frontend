import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../_services/users.service';
import { User } from '../_models/users'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = null;
  headers: string[];
  
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const username = params['username'];
      this.userService
      .getUserData(username)
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.user = resp.body; 
      });
      
  });
 }
}
