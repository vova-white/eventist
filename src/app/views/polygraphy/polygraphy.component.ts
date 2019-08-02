import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygraphy',
  templateUrl: './polygraphy.component.html',
  styleUrls: ['./polygraphy.component.scss']
})
export class PolygraphyComponent implements OnInit {
  childrens = [
    { link: '/polygraphy', text: 'Вес' },
    { link: 'formats', text: 'Форматы' }
  ];

  isResult = true;

  constructor() {}

  ngOnInit() {}
}
