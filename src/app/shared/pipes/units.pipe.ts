import { Pipe, PipeTransform } from '@angular/core';
import { pluralize } from 'numeralize-ru';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {
  transform(val: string, arg?: number): string {
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
        case 'distanceLong':
          unit = pluralize(Math.round(arg), 'метр', 'метра', 'метров');
          break;
        case 'lm':
          unit = 'lm';
          break;
        case 'kvt':
          unit = 'КВт';
          break;
        case 'ml':
          unit = 'мл';
          break;
        case 'l':
          unit = 'л';
          break;
        case 'bottle':
          unit = pluralize(Math.round(arg), 'бутылка', 'бутылки', 'бутылок');
          break;
        case 'time':
          unit = 'ч';
          break;
        case 'timeLong':
          unit = pluralize(Math.round(arg), 'час', 'часа', 'часов');
          break;
      }
      return unit;
    } else {
      return '';
    }
  }
}
