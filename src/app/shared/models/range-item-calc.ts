import { RangeItem } from './range-item';
import { Range } from './range';

export class RangeItemCalc extends RangeItem {
  result: Range;

  constructor(item: RangeItem, value: number) {
    super(item.label, item.range, item.units);
    this.result = this.getResult(item.range, value);
  }

  getResult(range: Range[], value): Range {
    if (range && range.length > 0 && value) {
      const result = range.filter(
        item => value >= item.min && value < item.max
      )[0];

      return new Range(result.min, result.max, result.value);
    }
  }
}
