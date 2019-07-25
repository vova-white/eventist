import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {
  transform(val: number): string {
    if (val !== undefined && val !== null) {
      const noComma = val.toString().replace(/,/g, ' ');
      return noComma.replace(/\./, ',');
    } else {
      return '';
    }
  }
}
