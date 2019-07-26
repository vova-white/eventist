import { Injectable } from '@angular/core';
import { SimpleItemCalc } from '../models/simple-item-calc';
import { ResultsTable } from '../interfaces/results-table';
import { SimpleItem } from '../models/simple-item';
import { RangeItem } from '../models/range-item';
import { RangeItemCalc } from '../models/range-item-calc';
import { RangeTimeItem } from '../models/range-time-item';
import { RangeTimeItemCalc } from '../models/range-time-item-calc';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  constructor() {}

  public createTables(tablesParams: ResultsTable[], calculationParams) {
    if (tablesParams && tablesParams.length > 0) {
      const tables = [];

      tablesParams.forEach(table => {
        table.data.forEach((item, index) => {
          table.data[index] = this.calculate(item, calculationParams);
        });
        tables.push(table);
      });

      return tables;
    }
  }

  calculate(item, calculationParams) {
    let calculatedItem;
    if (item instanceof SimpleItem) {
      calculatedItem = new SimpleItemCalc(
        item,
        calculationParams[item.activeParam]
      );
    }

    if (item instanceof RangeItem) {
      calculatedItem = new RangeItemCalc(
        item,
        calculationParams[item.activeParam]
      );
    }

    if (item instanceof RangeTimeItem) {
      calculatedItem = new RangeTimeItemCalc(
        item,
        calculationParams[item.activeParam],
        calculationParams.time
      );
    }

    return calculatedItem;
  }

  public calcSound({ k1 = 1, k2 = 1.5, kvt = 1000, v = 0 }) {
    return (v * k1 * k2) / kvt;
  }
}
