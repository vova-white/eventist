import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';
import { RangeItem } from 'src/app/shared/models/range-item';
import { Range } from 'src/app/shared/models/range';

@Component({
  selector: 'app-proection',
  templateUrl: './proection.component.html',
  styleUrls: ['./proection.component.scss']
})
export class ProectionComponent implements OnInit {
  calculationParams = {
    quantity: 0,
    height: '',
    width: ''
  };

  tables = [];
  tablesParams = [];

  range = [
    new Range(0, 6, 500),
    new Range(6, 21, 1200),
    new Range(21, 51, 2500),
    new Range(51, 76, 4000),
    new Range(76, 101, 5000),
    new Range(101, 301, 7000),
    new Range(301, 501, 10000),
    new Range(501, 1001, 20000),
    new Range(1001, 9999999990, 30000),
    new Range(9999999991, Infinity, 30000)
  ];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        data: [
          new SimpleItem(
            'Минимальное расстояние до первого ряда',
            2,
            0,
            'multiply',
            'distance',
            '1.0-1',
            'height'
          ),
          new SimpleItem(
            'Максимальное расстояние до последнего ряда',
            8,
            0,
            'multiply',
            'distance',
            '1.0-1',
            'height',
            '*Eсли ваш зал длиннее, необходимо разместить дополнительные экраны'
          ),
          new SimpleItem(
            'Минимальная высота экрана над полом',
            0,
            1.5,
            'multiply',
            'distance',
            '1.0-1'
          ),
          new SimpleItem(
            'Общая площадь экранов',
            0.07,
            0,
            'multiply',
            'area',
            '1.0-0'
          ),
          new RangeItem('Необходимая яркость проектора', this.range)
        ]
      }
    ];
  }

  ngOnInit() {
    this.getQuantity();

    this.setTables();
  }

  setTables() {
    this.tables = this.calculation.createTables(
      this.tablesParams,
      this.calculationParams
    );
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getGuestQuantity();
  }

  onChange(form) {
    if (form.valid) {
      this.store.setGuestsQuantity(this.calculationParams.quantity);
      this.getQuantity();

      this.setTables();
    }
  }
}
