import { Injectable } from '@angular/core';
import { SimpleItemCalc } from '../models/simple-item-calc';
import { ResultsTable } from '../interfaces/results-table';
import { SimpleItem } from '../models/simple-item';
import { RangeItem } from '../models/range-item';
import { RangeItemCalc } from '../models/range-item-calc';
import { RangeTimeItem } from '../models/range-time-item';
import { RangeTimeItemCalc } from '../models/range-time-item-calc';
import { CoefficientItem } from '../models/coefficient-item';
import { CoefficientItemCalc } from '../models/coefficient-item-calc';
import { GenderCoefItem } from '../models/gender-coef-item';
import { GenderCoefItemCalc } from '../models/gender-coef-item-calc';

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

    if (item instanceof CoefficientItem) {
      calculatedItem = new CoefficientItemCalc(
        item,
        calculationParams[item.activeParam],
        calculationParams.audience
      );
    }

    if (item instanceof GenderCoefItem) {
      calculatedItem = new GenderCoefItemCalc(
        item,
        calculationParams[item.activeParam],
        calculationParams.audience
      );
    }

    return calculatedItem;
  }

  public calcSound({ k1 = 1, k2 = 1.5, kvt = 1000, v = 0 }) {
    return (v * k1 * k2) / kvt;
  }

  public setTimeCoefficient(
    defaultTime: number,
    time: number,
    nextHour: number,
    prevHour: number
  ): number {
    let coefficient = 1;

    if (time > defaultTime) {
      coefficient = (time - 1) * nextHour;
    }

    if (time < defaultTime) {
      coefficient = (defaultTime - time) * prevHour;
    }

    return coefficient;
  }

  public drinkersCoefficient(
    quantity: number,
    drinkers: {
      low: number;
      middle: number;
    },
    lowMulty: number,
    hightMulty: number
  ): number {
    const low = drinkers.low / 100;
    const middle = (100 - (100 - drinkers.middle + low)) / 100;
    const hight = (100 - middle - low) / 100;

    return (
      quantity * low * lowMulty +
      quantity * middle +
      quantity * hight * hightMulty
    );
  }

  public genderCoefficient(
    quantity: number,
    gender: number = 50,
    maleMulty: number = 1,
    femaleMulty: number = 1
  ): number {
    return (
      quantity * (gender / 100) * maleMulty +
      quantity * ((100 - gender) / 100) * femaleMulty
    );
  }
}
