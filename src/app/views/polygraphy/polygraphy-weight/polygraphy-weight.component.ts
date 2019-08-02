import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { SimpleItem } from 'src/app/shared/models/simple-item';
import { CalculationService } from 'src/app/shared/services/calculation.service';

@Component({
  selector: 'app-polygraphy-weight',
  templateUrl: './polygraphy-weight.component.html',
  styleUrls: ['./polygraphy-weight.component.scss']
})
export class PolygraphyWeightComponent implements OnInit {
  weight = [65, 80, 100, 120, 160, 200, 220, 250, 280];

  calculationParams = {
    weight: 65,
    format: 0,
    quantity: 1,
    edition: 1,
    bookletWeight: 0,
    editionWeight: 0
  };

  optionsWeight: Options = {
    stepsArray: this.weight.map(item => ({
      value: item
    })),
    translate: (): string => {
      return '';
    }
  };

  optionsFormat: Options = {
    stepsArray: this.createFormatArray(6),
    translate: (): string => {
      return '';
    }
  };

  tables = [];
  tablesParams = [];

  constructor(private calculation: CalculationService) {
    this.calcEditionWeight();
  }

  ngOnInit() {
    this.setTables();
  }

  setTables() {
    this.tablesParams = [
      {
        data: [
          new SimpleItem(
            'Вес одного буклета',
            0,
            this.calculationParams.bookletWeight,
            'multiply',
            'grams',
            '1.0-0',
            'weight'
          ),
          new SimpleItem(
            'Вес тиража',
            0,
            this.calculationParams.editionWeight,
            'multiply',
            'kilos',
            '1.0-2',
            'weight'
          )
        ]
      }
    ];

    this.tables = this.calculation.createTables(
      this.tablesParams,
      this.calculationParams
    );
  }

  onChanges() {
    this.calcEditionWeight();
    this.setTables();
  }

  createFormatArray(max: number) {
    const array = [];
    for (let index = 0; index <= max; index++) {
      array.push({ value: index });
    }

    return array;
  }

  calcBookletWeight() {
    return (this.calculationParams.bookletWeight =
      this.calculationParams.weight / (this.calculationParams.format + 1));
  }

  calcEditionWeight() {
    return (this.calculationParams.editionWeight =
      (this.calcBookletWeight() *
        this.calculationParams.quantity *
        this.calculationParams.edition) /
      1000);
  }
}
