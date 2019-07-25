import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss']
})
export class SectionWrapperComponent implements OnInit {
  @Input() addPadding = false;

  constructor() {}

  ngOnInit() {}
}
