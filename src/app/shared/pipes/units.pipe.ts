import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {
  transform(val: string): string {
    if (val !== undefined && val !== null) {
      let unit: string;
      switch (val) {
        case 'area':
          unit = `м<sup>2</sup>`;
          break;
        case 'people':
          unit = `чел.`;
          break;
        case 'quantity':
          unit = `шт.`;
          break;
        case 'grams':
          unit = `гр`;
          break;
        case 'kilos':
          unit = `кг`;
          break;
        case 'distance':
          unit = `м`;
          break;
        case 'lm':
          unit = 'lm';
          break;
      }
      return unit;
    } else {
      return '';
    }
  }
}
