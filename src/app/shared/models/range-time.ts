import { Range } from './range';

export class RangeTime extends Range {
  time: number;

  constructor(range: Range, time: number = 1) {
    super(range.min, range.max, range.value);

    this.time = time;
  }
}
