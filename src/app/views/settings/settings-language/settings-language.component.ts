import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-language',
  templateUrl: './settings-language.component.html',
  styleUrls: ['./settings-language.component.scss']
})
export class SettingsLanguageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(e) {
    e.preventDefault();
  }
}
