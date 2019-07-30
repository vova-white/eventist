import { SimpleItem } from './simple-item';

export class CoefficientItem extends SimpleItem {
  maleMulty: number;
  femaleMulty: number;
  lowMulty: number;
  hightMulty: number;

  constructor(
    item: SimpleItem,
    options?: {
      maleMulty?: number;
      femaleMulty?: number;
      lowMulty?: number;
      hightMulty?: number;
    }
  ) {
    super(
      item.label,
      item.mult,
      item.min,
      item.operation,
      item.units,
      item.format,
      item.activeParam,
      item.description
    );

    this.maleMulty = options.maleMulty;
    this.femaleMulty = options.femaleMulty;
    this.lowMulty = options.lowMulty;
    this.hightMulty = options.hightMulty;
  }
}
