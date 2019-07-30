import { CoefficientItem } from './coefficient-item';
import { SimpleItem } from './simple-item';
import { SimpleItemCalc } from './simple-item-calc';

export class CoefficientItemCalc extends CoefficientItem {
  result: number;

  constructor(
    item: CoefficientItem,
    value,
    audience: {
      gender?: number;
      drinkers?: {
        low?: number;
        middle?: number;
      };
    }
  ) {
    const simpeItem = new SimpleItem(
      item.label,
      item.mult,
      item.min,
      item.operation,
      item.units,
      item.format,
      item.activeParam,
      item.description
    );

    super(simpeItem, {
      maleMulty: item.maleMulty,
      femaleMulty: item.femaleMulty,
      lowMulty: item.lowMulty,
      hightMulty: item.hightMulty
    });

    const simpleResult = new SimpleItemCalc(simpeItem, value).result;

    this.result = this.getResult(simpleResult, audience);
  }

  getResult(simpleResult: number, audience): number {
    const gender = this.calcGender(
      simpleResult,
      audience.gender,
      this.maleMulty,
      this.femaleMulty
    );

    return this.calcDrinkers(
      gender,
      audience.drinkers,
      this.lowMulty,
      this.hightMulty
    );
  }

  calcGender(
    quantity: number,
    gender: number = 50,
    maleMulty: number = 1,
    femaleMulty: number = 1
  ): number {
    return (
      quantity * ((gender / 100) * maleMulty) +
      quantity * ((100 - gender) / 100) * femaleMulty
    );
  }

  calcDrinkers(
    quantity: number,
    drinkers: {
      low: number;
      middle: number;
    },
    lowMulty: number,
    hightMulty: number
  ): number {
    const low = drinkers.low;
    const middle = 100 - (100 - drinkers.middle + drinkers.low);
    const hight = 100 - middle - low;

    return Math.ceil(
      quantity * (low / 100) * lowMulty +
        quantity * (middle / 100) +
        quantity * (hight / 100) * hightMulty
    );
  }
}
