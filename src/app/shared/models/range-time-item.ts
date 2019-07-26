import { RangeTime } from './range-time';

export class RangeTimeItem {
  label: string;
  range: RangeTime[];
  units: string;
  activeParam: string;

  constructor(
    label: string,
    range: RangeTime[],
    units: string = 'area',
    activeParam: string = 'quantity'
  ) {
    this.label = label;
    this.range = range;
    this.units = units;
    this.activeParam = activeParam;
  }
}
