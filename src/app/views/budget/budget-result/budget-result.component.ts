import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from 'src/app/shared/interfaces/dynamic-component';
import {
  DYNAMIC_COMPONENT_DATA,
  ComponentType
} from 'src/app/shared/constants';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-budget-result',
  templateUrl: './budget-result.component.html',
  styleUrls: ['./budget-result.component.scss']
})
export class BudgetResultComponent implements DynamicComponent, OnInit {
  tables = [];
  tablesParams = [];

  constructor(
    @Inject(DYNAMIC_COMPONENT_DATA) public data,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        title: 'Расшифровка бюджета',
        data: [
          new SimpleItem(
            'Бюджет без НДС',
            0.8,
            0,
            'multiply',
            '',
            '1.0-0',
            'budget'
          ),
          new SimpleItem(
            'АК',
            this.data.budget / 100,
            0,
            'multiply',
            '',
            '1.0-0',
            'commission'
          ),
          new SimpleItem(
            'Бюджет без АК и НДС',
            0,
            this.data.budget * 0.8 -
              (this.data.budget / 100) * this.data.commission,
            'multiply',
            '',
            '1.0-0',
            'budget'
          ),
          new SimpleItem(
            'Бюджет на человека',
            this.data.quantity,
            0,
            'division',
            '',
            '1.0-2',
            'budget'
          ),
          new SimpleItem(
            'Бюджет на человека без АК и НДС',
            0,
            (this.data.budget * 0.8 -
              (this.data.budget / 100) * this.data.commission) /
              this.data.quantity,
            'multiply',
            '',
            '1.0-2',
            'budget'
          )
          // new SimpleArrayItem('Площадь сцены', this.sceneArea, {}),
          // new SimpleItem(
          //   'Высота сцены',
          //   50,
          //   4,
          //   'division',
          //   'distance',
          //   '1.0-0',
          //   sceneHeightParam
          // ),
          // new SimpleItem(
          //   'Количество ступенек',
          //   50,
          //   0,
          //   'division',
          //   'quantity',
          //   '1.0-0',
          //   'length'
          // )
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.budget;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);
  }
}
