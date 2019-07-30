import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from 'src/app/shared/interfaces/dynamic-component';
import {
  DYNAMIC_COMPONENT_DATA,
  ComponentType,
  DRINK_TIME
} from 'src/app/shared/constants';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';
import { CoefficientItem } from 'src/app/shared/models/coefficient-item';

@Component({
  selector: 'app-drink-banquet',
  templateUrl: './drink-banquet.component.html',
  styleUrls: ['./drink-banquet.component.scss']
})
export class DrinkBanquetComponent implements DynamicComponent, OnInit {
  tables = [];
  tablesParams = [];

  timeMulty: number;

  coefs = {
    lowMulty: 0.5,
    hightMulty: 1.5
  };

  constructor(
    @Inject(DYNAMIC_COMPONENT_DATA) public data,
    private calculation: CalculationService
  ) {
    this.timeMulty = this.calculation.setTimeCoefficient(
      DRINK_TIME[data.format],
      data.time,
      1.2,
      0.8
    );

    console.log(this.timeMulty);

    this.tablesParams = [
      {
        title: 'Шампанское',
        data: [
          new SimpleItem('На человека', 0, 150, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (150 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            this.coefs
          )
        ]
      },
      {
        title: 'Вино сухое белое',
        data: [
          new SimpleItem('На человека', 0, 120, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (120 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            this.coefs
          )
        ]
      },
      {
        title: 'Вино сухое красное',
        data: [
          new SimpleItem('На человека', 0, 300, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (300 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            this.coefs
          )
        ]
      },
      {
        title: 'Коньяк',
        data: [
          new SimpleItem('На человека', 0, 45, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (45 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            { ...this.coefs, maleMulty: 1.3, femaleMulty: 0.5 }
          )
        ]
      },
      {
        title: 'Водка',
        data: [
          new SimpleItem('На человека', 0, 200, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (200 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            { ...this.coefs, femaleMulty: 0.5 }
          )
        ]
      },
      {
        title: 'Ликер, диджестив',
        data: [
          new SimpleItem('На человека', 0, 50, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (50 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            { ...this.coefs, maleMulty: 0.5, femaleMulty: 1.5 }
          )
        ]
      },
      {
        title: 'Б/а напитки',
        data: [
          new SimpleItem('На человека', 0, 600, 'multiply', 'ml'),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (600 / 1000) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            this.coefs
          )
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.banquet;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);
  }
}
