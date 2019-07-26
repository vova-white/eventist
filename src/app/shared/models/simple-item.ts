export class SimpleItem {
  label: string;
  mult: number;
  min: number;
  operation: string;
  units: string;
  format: string;
  activeParam: string;
  description: string;

  constructor(
    label: string,
    mult: number = 0,
    min: number = 0,
    operation: string = 'multiply',
    units: string = 'area',
    format: string = '1.0-0',
    activeParam: string = 'quantity',
    description: string = ''
  ) {
    this.label = label || '';
    this.mult = mult;
    this.min = min;
    this.operation = operation;
    this.units = units;
    this.format = format;
    this.activeParam = activeParam;
    this.description = description;
  }
}
