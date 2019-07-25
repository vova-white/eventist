import { SimpleItem } from './simple-item';

export class SimpleItemCalc extends SimpleItem {
  result: number;

  constructor(item: SimpleItem, value: number) {
    super(
      item.label,
      item.mult,
      item.min,
      item.operation,
      item.units,
      item.format
    );
    this.result = this.getResult(value, item.mult, item.min, item.operation);
  }

  getResult(value, mult, min, operation) {
    const result = operation === 'multiply' ? value * mult : value / mult;
    return result <= min ? min : result;
  }
}
