import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-currency',
  templateUrl: './settings-currency.component.html',
  styleUrls: ['./settings-currency.component.scss']
})
export class SettingsCurrencyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(e) {
    e.preventDefault();
  }
}
