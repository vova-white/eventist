import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from 'src/app/shared/interfaces/dynamic-component';
import {
  DYNAMIC_COMPONENT_DATA,
  ComponentType,
  DRINK_TIME
} from 'src/app/shared/constants';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { Range } from 'src/app/shared/models/range';
import { RangeItem } from 'src/app/shared/models/range-item';
import { RangeItemCalc } from 'src/app/shared/models/range-item-calc';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-light-result',
  templateUrl: './light-result.component.html',
  styleUrls: ['./light-result.component.scss']
})
export class LightResultComponent implements DynamicComponent, OnInit {
  tables = [];
  tablesParams = [];

  powerRange: Range[] = [
    { min: 3, max: 6, value: 250 },
    { min: 6, max: 9, value: 550 },
    { min: 9, max: 12, value: 1200 },
    { min: 12, max: 16, value: 2000 }
  ];

  quantityRange: Range[] = [
    { min: 50, max: 100, value: 5 },
    { min: 100, max: 200, value: 10 },
    { min: 200, max: 300, value: 20 },
    { min: 300, max: 500, value: 30 },
    { min: 500, max: 1000, value: 50 },
    { min: 1000, max: 3000, value: 100 },
    { min: 3000, max: 3001, value: 300 }
  ];

  constructor(
    @Inject(DYNAMIC_COMPONENT_DATA) public data,
    private calculation: CalculationService
  ) {
    const power = this.calcRange(
      'Мощность световых приборов',
      this.powerRange,
      'W',
      'height',
      this.data.height
    );
    const quantity = this.calcRange(
      'Количество световых приборов',
      this.quantityRange,
      'quantity',
      'area',
      this.data.area
    );

    this.tablesParams = [
      {
        data: [
          new SimpleItem(
            quantity.label,
            0,
            quantity.result.value,
            'multiply',
            quantity.units,
            '1.0-0',
            quantity.activeParam
          ),
          new SimpleItem(
            power.label,
            0,
            (power.result.value * quantity.result.value) / 1000,
            'multiply',
            power.units,
            '1.0-0',
            power.activeParam
          )
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.light;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);
  }

  calcRange(
    label: string,
    range: Range[],
    units: string,
    activeParam: string,
    value: number
  ) {
    return new RangeItemCalc(
      new RangeItem(label, range, units, activeParam),
      value
    );
  }
}
