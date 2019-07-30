import { Component, OnInit, Input, OnChanges } from '@angular/core';

const defaultBak = '/category';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit, OnChanges {
  @Input() showBack = true;
  @Input() heading = '';
  @Input() back = defaultBak;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.back) {
      this.back = defaultBak;
    }
  }
}
