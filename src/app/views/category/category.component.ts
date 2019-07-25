import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories = [
    {
      path: '/court',
      text: 'Площадка',
      img: 'categor1.png'
    },
    {
      path: '/food',
      text: 'Еда',
      img: 'categor2.png'
    },
    {
      path: '/drink',
      text: 'Напитки',
      img: 'categor3.png'
    },
    {
      path: '/staff',
      text: 'Персонал',
      img: 'categor4.png'
    },
    {
      path: '/wardrobe',
      text: 'Гардероб',
      img: 'categor5.png'
    },
    {
      path: '/light',
      text: 'Свет',
      img: 'categor6.png'
    },
    {
      path: '/toilet',
      text: 'Туалеты',
      img: 'categor7.png'
    },
    {
      path: '/sound',
      text: 'Звук',
      img: 'categor8.png'
    },
    {
      path: '/scene',
      text: 'Сцена',
      img: 'categor9.png'
    },
    {
      path: '/proection',
      text: 'Проекция',
      img: 'categor10.png'
    },
    {
      path: '/video',
      text: 'Видео',
      img: 'categor11.png'
    },
    {
      path: '/weather',
      text: 'Погода',
      img: 'categor12.png'
    },
    {
      path: '/risk',
      text: 'Риски',
      img: 'categor13.png'
    },
    {
      path: '/polygraphy',
      text: 'Полиграфия',
      img: 'categor14.png'
    },
    {
      path: '/budget',
      text: 'Бюджет',
      img: 'categor15.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
