import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from 'src/app/shared/interfaces/dynamic-component';
import {
  DYNAMIC_COMPONENT_DATA,
  ComponentType
} from 'src/app/shared/constants';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-drink-coffee',
  templateUrl: './drink-coffee.component.html',
  styleUrls: ['./drink-coffee.component.scss']
})
export class DrinkCoffeeComponent implements DynamicComponent, OnInit {
  tables = [];
  tablesParams = [];

  constructor(
    @Inject(DYNAMIC_COMPONENT_DATA) public data,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        title: 'Кофе натуральный',
        data: [
          new SimpleItem('На человека', 0, 150, 'multiply', 'ml'),
          new SimpleItem(
            'Всего (литры)',
            0.7 * 0.15,
            0,
            'multiply',
            'l',
            '1.0-2'
          ),
          new SimpleItem('Всего (штуки)', 0.7, 0, 'multiply', 'quantity')
        ]
      },
      {
        title: 'Чай',
        data: [
          new SimpleItem('На человека', 0, 150, 'multiply', 'ml'),
          new SimpleItem(
            'Всего (литры)',
            0.6 * 0.15,
            0,
            'multiply',
            'l',
            '1.0-2'
          ),
          new SimpleItem('Всего (штуки)', 0.6, 0, 'multiply', 'quantity')
        ]
      },
      {
        title: 'Молоко',
        data: [
          new SimpleItem('На человека', 0, 10, 'multiply', 'ml'),
          new SimpleItem(
            'Всего (литры)',
            0.5 * 0.01,
            0,
            'multiply',
            'l',
            '1.0-2'
          ),
          new SimpleItem('Всего (штуки)', 0.5, 0, 'multiply', 'quantity')
        ]
      },
      {
        title: 'Вода/соки',
        data: [
          new SimpleItem('На человека', 0, 250, 'multiply', 'ml'),
          new SimpleItem(
            'Всего (литры)',
            0.4 * 0.25,
            0,
            'multiply',
            'l',
            '1.0-2'
          ),
          new SimpleItem('Всего (штуки)', 0.4, 0, 'multiply', 'quantity')
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.coffee;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);
  }
}
