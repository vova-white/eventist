import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/models/size';

@Component({
  selector: 'app-polygraphy-format',
  templateUrl: './polygraphy-format.component.html',
  styleUrls: ['./polygraphy-format.component.scss']
})
export class PolygraphyFormatComponent implements OnInit {
  active = 'a';

  americanSizesM = [
    [139.7, 215.9],
    [184.1, 266.7],
    [215.9, 279.4],
    [215.9, 330.2],
    [215.9, 355.6],
    [228.6, 304.8],
    [254, 355.6],
    [279.4, 431.8],
    [304.8, 457.2],
    [431.8, 279.4],
    [431.8, 558.8],
    [457.2, 609.6],
    [558.8, 863.6],
    [609.6, 914.4],
    [762, 1066.8],
    [563.6, 1117.6]
  ];

  americanSizesD = [
    [5.5, 8.5],
    [7.25, 10.55],
    [8.5, 11],
    [8.5, 13],
    [8.5, 14],
    [9, 12],
    [10, 14],
    [11, 17],
    [12, 18],
    [17, 11],
    [17, 22],
    [18, 24],
    [22, 34],
    [24, 36],
    [30, 42],
    [34, 44]
  ];

  englishSizesM = [
    [336, 419],
    [368, 469],
    [336, 588],
    [336, 628],
    [394, 507],
    [419, 533],
    [444, 558],
    [457, 584],
    [482, 609],
    [507, 634],
    [559, 761]
  ];

  englishSizesD = [
    [13.25, 16.5],
    [14.5, 18.5],
    [13.25, 22.0],
    [13.25, 24.75],
    [15.5, 20.0],
    [16.5, 21.0],
    [17.5, 22.0],
    [18.0, 23.0],
    [19.0, 24.0],
    [20.0, 25.0],
    [22.0, 30.0]
  ];

  formats = [
    {
      slug: 'a',
      title: 'Серия А',
      descritprion:
        'Размеры листов серии A строятся от листа A0, площадь которого равна 1 кв. м. Формат A1 равен половине A0 и получен путем разрезания А0 на две равные части. А1 имеет длину, равную ширине А0 и ширину равную половине длины А0. И далее размеры всех форматов этой серии получаются путем деления пополам старшего по линии, параллельной короткому краю.',
      table: [
        {
          title: 'Формат',
          data: this.createStandartFormats('A', 6).concat(['A6/2'])
        },
        {
          title: 'Pазмер: ширина x длина (мм)',
          data: this.createStandartSizes(7, 841, 1189)
        }
      ]
    },
    {
      slug: 'b',
      title: 'Серия B',
      descritprion:
        'Каждый формат серии B является средним геометрическим между форматами An и A(n+1).',
      table: [
        {
          title: 'Формат',
          data: this.createStandartFormats('B', 6)
        },
        {
          title: 'Pазмер: ширина x длина (мм)',
          data: this.createStandartSizes(6, 1000, 1414)
        }
      ]
    },
    {
      slug: 'c',
      title: 'Cерия C',
      subtitle: '(Размеры конвертов в сложеном виде)',
      descritprion:
        'Каждый формат серии C является средним геометрическим между форматами A и B с этим же номером. Благодаря этому лист A4 свободно укладывается в конверт C4.',
      table: [
        {
          title: 'Формат',
          data: this.createStandartFormats('C', 6)
        },
        {
          title: 'Pазмер: ширина x длина (мм)',
          data: this.createStandartSizes(6, 917, 1297)
        }
      ]
    },
    {
      slug: 'american',
      title: 'Американские форматы печатных листов',
      table: [
        {
          title: 'Формат',
          data: [
            'Statement',
            'Executive',
            'Letter (Size A)',
            'Folio',
            'Legal',
            'Arch 1',
            '10 x 14',
            'Ledger (Size B)',
            'Arch 2',
            'Tabloid',
            'Size C',
            'Arch 3',
            'Size D',
            'Arch 4',
            'Arch 5',
            'Size E (Arch 6)'
          ]
        },
        {
          title: 'Pазмер: ширина x длина (мм)',
          data: this.americanSizesM.map(item => new Size(item).result)
        },
        {
          title: 'Pазмер: ширина x длина (дюймы)',
          data: this.americanSizesD.map(item => new Size(item).result)
        }
      ]
    },
    {
      slug: 'english',
      title: 'Английские форматы печатных листов',
      table: [
        {
          title: 'Формат',
          data: [
            'Foolscap',
            'Small Post',
            'Sheet and 1/3 cap',
            'Sheet and 1/2 cap',
            'Demy',
            'Large Post',
            'Small medium',
            'Medium',
            'Small Royal',
            'Royal',
            'Imperial'
          ]
        },
        {
          title: 'Pазмер: ширина x длина (мм)',
          data: this.englishSizesM.map(item => new Size(item).result)
        },
        {
          title: 'Pазмер: ширина x длина (дюймы)',
          data: this.englishSizesD.map(item => new Size(item).result)
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}

  createStandartFormats(prefix: string, max: number) {
    const array = [];

    for (let index = 0; index <= max; index++) {
      array.push(prefix + index);
    }

    return array;
  }

  createStandartSizes(max: number, width: number, length: number) {
    const array = [];

    for (let index = 0; index <= max; index++) {
      if (index === 0) {
        array.push([width, length]);
      } else {
        array.push([Math.floor(array[index - 1][1] / 2), array[index - 1][0]]);
      }
    }
    return array.map(item => new Size(item).result);
  }

  createTableBody(table) {
    const newTable = [];
    for (let i = 0; i < table.length; i++) {
      for (let k = 0; k < table[i].data.length; k++) {
        if (newTable.length <= k) {
          newTable.push([]);
        }
        newTable[k][i] = table[i].data[k];
      }
    }
    return newTable;
  }

  toggle(slug) {
    this.active = this.active === slug ? '' : slug;
  }
}
