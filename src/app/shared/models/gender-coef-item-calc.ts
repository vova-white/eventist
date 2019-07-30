import { GenderCoefItem } from './gender-coef-item';
import { SimpleItem } from './simple-item';
import { SimpleItemCalc } from './simple-item-calc';

export class GenderCoefItemCalc extends GenderCoefItem {
  result: number;

  constructor(
    item: GenderCoefItem,
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
      male: item.mults.male,
      female: item.mults.female,
      maleLow: item.mults.maleLow,
      femaleLow: item.mults.femaleLow,
      maleHight: item.mults.maleHight,
      femaleHight: item.mults.femaleHight
    });

    const simpleResult = new SimpleItemCalc(simpeItem, value).result;

    this.result = this.calculate(simpleResult, audience);
  }

  calculate(quantity, audience): number {
    const counter = this.calcGender(quantity, audience.gender);
    let result = 0;

    Object.keys(counter).forEach(key => {
      result += this.calcDrinkers(
        counter[key],
        audience.drinkers,
        this.mults[key + 'Low'],
        this.mults[key],
        this.mults[key + 'Hight']
      );
    });

    return result;
  }

  calcGender(quantity: number, gender: number = 50) {
    return {
      male: quantity * (gender / 100),
      female: quantity * ((100 - gender) / 100)
    };
  }

  calcDrinkers(
    quantity: number,
    drinkers: {
      low: number;
      middle: number;
    },
    lowMulty,
    middleMulty,
    hightMulty
  ): number {
    const low = drinkers.low;
    const middle = 100 - (100 - drinkers.middle + drinkers.low);
    const hight = 100 - middle - low;

    return Math.ceil(
      quantity * (low / 100) * lowMulty +
        quantity * (middle / 100) * middleMulty +
        quantity * (hight / 100) * hightMulty
    );
  }
}
