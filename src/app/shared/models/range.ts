export class Range {
  min: number;
  max: number;
  value: number;

  constructor(min: number = 0, max: number = 0, value: number = 0) {
    this.min = min;
    this.max = max;
    this.value = value;
  }
}
