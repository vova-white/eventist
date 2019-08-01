import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { RangeTime } from 'src/app/shared/models/range-time';
import { Range } from 'src/app/shared/models/range';
import { RangeTimeItem } from 'src/app/shared/models/range-time-item';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';

@Component({
  selector: 'app-toilet',
  templateUrl: './toilet.component.html',
  styleUrls: ['./toilet.component.scss']
})
export class ToiletComponent implements OnInit {
  calculationParams = {
    quantity: 100,
    time: 1
  };

  tables = [];
  tablesParams = [];

  options: Options = {
    floor: 100,
    ceil: 5000,
    stepsArray: [
      { value: 100 },
      { value: 250 },
      { value: 500 },
      { value: 1000 },
      { value: 2500 },
      { value: 5000 }
    ]
  };

  optionsTime: Options = {
    floor: 1,
    ceil: 10
  };

  ranges = [
    {
      people: [0, 101],
      time: [2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
      people: [101, 251],
      time: [3, 3, 3, 3, 4, 4, 4, 4, 6, 6]
    },
    {
      people: [251, 501],
      time: [4, 4, 6, 6, 6, 8, 8, 8, 10, 10]
    },
    {
      people: [501, 1001],
      time: [5, 6, 6, 7, 7, 8, 10, 10, 12, 12]
    },
    {
      people: [1001, 2501],
      time: [8, 10, 12, 14, 16, 18, 20, 20, 22, 24]
    },
    {
      people: [2501, 5001],
      time: [12, 16, 18, 20, 22, 24, 28, 30, 34, 36]
    }
  ];
  range: RangeTime[] = [];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.range = this.createRange();

    this.tablesParams = [
      {
        data: [
          new RangeTimeItem(
            'Необходимое количество кабинок туалетов',
            this.range,
            'quantity'
          )
        ]
      }
    ];
  }

  ngOnInit() {
    this.getQuantity();

    this.setTables();
  }

  setTables() {
    this.tables = this.calculation.createTables(
      this.tablesParams,
      this.calculationParams
    );
  }

  getQuantity() {
    this.calculationParams.quantity =
      this.store.getGuestQuantity() > 5000
        ? 5000
        : this.store.getGuestQuantity() || 100;
  }

  changeRange(e, model) {
    this.calculationParams[model] = e.value;

    if (model === 'quantity') {
      this.store.setGuestsQuantity(this.calculationParams.quantity);
    }
    this.getQuantity();
    this.setTables();
  }

  createRange() {
    const rangeArr = [];
    this.ranges.forEach(range => {
      range.time.forEach((item, index) => {
        rangeArr.push(
          new RangeTime(
            new Range(range.people[0], range.people[1], item),
            index + 1
          )
        );
      });
    });

    return rangeArr;
  }
}
