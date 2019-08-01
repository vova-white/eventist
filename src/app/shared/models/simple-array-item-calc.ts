import { SimpleArrayItem } from './simple-array-item';
import { MinMax } from '../interfaces/min-max';

export class SimpleArrayItemCalc extends SimpleArrayItem {
  result: MinMax;

  constructor(item: SimpleArrayItem, values) {
    super(item.label, item.data, { units: item.units, format: item.format });

    this.result = this.getResult(this.data, values);
  }

  getResult(data, values): MinMax {
    const resultArray = Object.keys(data).map(key => {
      const result =
        data[key].operation === 'multiply'
          ? values[key] * data[key].mult
          : values[key] / data[key].mult;

      return result <= data[key].min
        ? data[key].min
        : Math.round(result * 100) / 100;
    });

    return { min: Math.min(...resultArray), max: Math.max(...resultArray) };
  }
}
