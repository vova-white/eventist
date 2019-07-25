import { Range } from './range';

export class RangeItem {
  label: string;
  range: Range[];
  units: string;

  constructor(label: string, range: Range[], units: string = 'area') {
    this.label = label;
    this.range = range;
    this.units = units;
  }
}
