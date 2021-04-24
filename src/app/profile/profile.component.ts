import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = [];
  
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const username = params['username'];
      this.userService
      .getUserData()
      .subscribe(user => this.user = user);
  });
 }
}
