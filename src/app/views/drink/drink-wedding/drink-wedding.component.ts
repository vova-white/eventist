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
import { GenderCoefItem } from 'src/app/shared/models/gender-coef-item';

@Component({
  selector: 'app-drink-wedding',
  templateUrl: './drink-wedding.component.html',
  styleUrls: ['./drink-wedding.component.scss']
})
export class DrinkWeddingComponent implements DynamicComponent, OnInit {
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

    this.tablesParams = [
      {
        title: 'Шампанское',
        data: [
          new SimpleItem(
            'На человека',
            0,
            375 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new GenderCoefItem(
            new SimpleItem(
              'Всего',
              (150 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            {
              male: 1,
              female: 1,
              maleLow: 2 / 3,
              femaleLow: 2 / 3,
              maleHight: 1,
              femaleHight: 2
            }
          )
        ]
      },
      {
        title: 'Вино сухое белое / красное',
        data: [
          new SimpleItem(
            'На человека',
            0,
            750 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new GenderCoefItem(
            new SimpleItem(
              'Всего',
              (750 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            {
              male: 1,
              female: 1,
              maleLow: 1 / 2,
              femaleLow: 1,
              maleHight: 1,
              femaleHight: 2
            }
          )
        ]
      },
      {
        title: 'Коньяк / Водка',
        data: [
          new SimpleItem(
            'На человека',
            0,
            750 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new GenderCoefItem(
            new SimpleItem(
              'Всего',
              (750 / 750) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            {
              male: 1,
              female: 1 / 3,
              maleLow: 1 / 2,
              femaleLow: 0,
              maleHight: 1.5,
              femaleHight: 1 / 2
            }
          )
        ]
      },
      {
        title: 'Сок',
        data: [
          new SimpleItem(
            'На человека',
            0,
            500 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new GenderCoefItem(
            new SimpleItem(
              'Всего',
              (500 / 1000) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            {
              male: 1,
              female: 1,
              maleLow: 1,
              femaleLow: 1,
              maleHight: 2,
              femaleHight: 1
            }
          )
        ]
      },
      {
        title: 'Минералка',
        data: [
          new SimpleItem(
            'На человека',
            0,
            500 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new SimpleItem(
            'Всего',
            (500 / 300) * this.timeMulty,
            0,
            'multiply',
            'bottle'
          )
        ]
      },
      {
        title: 'Газировка',
        data: [
          new SimpleItem(
            'На человека',
            0,
            1000 * this.timeMulty,
            'multiply',
            'ml'
          ),
          new CoefficientItem(
            new SimpleItem(
              'Всего',
              (1000 / 300) * this.timeMulty,
              0,
              'multiply',
              'bottle'
            ),
            {
              maleMulty: 1,
              femaleMulty: 1,
              lowMulty: 1 / 2,
              hightMulty: 1
            }
          )
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.wedding;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);
  }
}
