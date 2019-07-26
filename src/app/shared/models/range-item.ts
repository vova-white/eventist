import { Range } from './range';

export class RangeItem {
  label: string;
  range: Range[];
  units: string;
  activeParam: string;

  constructor(
    label: string,
    range: Range[],
    units: string = 'area',
    activeParam: string = 'quantity'
  ) {
    this.label = label;
    this.range = range;
    this.units = units;
    this.activeParam = activeParam;
  }
}
