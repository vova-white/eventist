import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLogined = false;

  constructor() {}

  ngOnInit() {}

  logout(e) {
    e.preventDefault();
  }
}
