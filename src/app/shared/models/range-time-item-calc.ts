import { RangeTimeItem } from './range-time-item';
import { RangeTime } from './range-time';
import { Range } from './range';

export class RangeTimeItemCalc extends RangeTimeItem {
  result: any;

  constructor(item: RangeTimeItem, value: number, time: number) {
    super(item.label, item.range, item.units, item.activeParam);

    this.result = this.getResult(item.range, value, time);
  }

  getResult(range, value, time): Range {
    if (range && range.length > 0 && value) {
      const result = range.filter(
        item => value >= item.min && value < item.max && item.time === time
      )[0];

      return new RangeTime(
        new Range(result.min, result.max, result.value),
        result.time
      );
    }
  }
}
