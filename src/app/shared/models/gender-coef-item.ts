import { SimpleItem } from './simple-item';

export class GenderCoefItem extends SimpleItem {
  mults: {
    male: number;
    female: number;
    maleLow: number;
    femaleLow: number;
    maleHight: number;
    femaleHight: number;
  };

  constructor(
    item: SimpleItem,
    options?: {
      male?: number;
      female?: number;
      maleLow?: number;
      femaleLow?: number;
      maleHight?: number;
      femaleHight?: number;
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

    this.mults = {
      male: options.male,
      female: options.female,
      maleLow: options.maleLow,
      femaleLow: options.femaleLow,
      maleHight: options.maleHight,
      femaleHight: options.femaleHight
    };
  }
}
