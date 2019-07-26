import { RangeTime } from './range-time';

export class RangeTimeItem {
  label: string;
  range: RangeTime[];
  units: string;

  constructor(label: string, range: RangeTime[], units: string = 'area') {
    this.label = label;
    this.range = range;
    this.units = units;
  }
}
