import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {
  params = {
    x: null,
    a: 50,
    b: 50
  };

  risk: number;

  options: Options = {
    floor: 1,
    ceil: 100,
    animate: false,
    translate: (): string => {
      return '';
    }
  };

  constructor() {}

  ngOnInit() {}

  calcRisk() {
    if (this.params.x) {
      this.risk = this.params.x * (this.params.a / 100) * (this.params.b / 100);
    }
  }
}
