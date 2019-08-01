import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Range } from 'src/app/shared/models/range';
import { RangeItem } from 'src/app/shared/models/range-item';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { FormatListItem } from 'src/app/shared/models/format-list-item';
import { IMG_PATH } from 'src/app/shared/constants';

@Component({
  selector: 'app-sound-step',
  templateUrl: './sound-step.component.html',
  styleUrls: ['./sound-step.component.scss']
})
export class SoundStepComponent implements OnInit {
  @Input() step = 1;
  @Output() choose: EventEmitter<any> = new EventEmitter();

  calculationParams = {
    quantity: 0,
    k1: 1,
    k2: 1,
    kvt: 1000,
    v: 0
  };

  chooseParams = {
    k1: [{ value: 1.5, text: 'На улице' }, { value: 1, text: 'В помещении' }],
    k2: [
      new FormatListItem(
        1.5,
        'Концерт',
        `${IMG_PATH}form1a.png`,
        `${IMG_PATH}form1.png`
      ),
      new FormatListItem(
        1,
        'Банкет',
        `${IMG_PATH}form2a.png`,
        `${IMG_PATH}form2.png`
      ),
      new FormatListItem(
        0.5,
        'Конференция',
        `${IMG_PATH}form3a.png`,
        `${IMG_PATH}form3.png`
      )
    ]
  };

  tables = [];
  tablesParams = [];

  range = [
    new Range(1, 5, 0.5),
    new Range(5, 20, 1),
    new Range(20, 50, 3),
    new Range(50, 100, 5),
    new Range(100, 200, 10),
    new Range(200, 300, 15),
    new Range(300, 500, 30),
    new Range(500, 1000, 50),
    new Range(1000, 2000, 80),
    new Range(2000, 3000, 100),
    new Range(3000, 4000, 150),
    new Range(4000, 5001, 200),
    new Range(5001, Infinity, 200)
  ];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        data: [
          new RangeItem('Необходимая мощность оборудованния', this.range, 'kvt')
        ]
      }
    ];
  }

  ngOnInit() {
    this.getQuantity();

    this.setTables();
  }

  onChange() {
    this.store.setGuestsQuantity(this.calculationParams.quantity);
    this.getQuantity();

    this.setTables();
  }

  setTables() {
    this.tables = this.calculation.createTables(
      this.tablesParams,
      this.calculationParams
    );

    this.tables.forEach(table => {
      table.data.forEach(item => {
        if (item.result && item.result.value) {
          this.calculationParams.v = item.result.value;
          item.result.value = this.calculation.calcSound(
            this.calculationParams
          );
        }
      });
    });

    this.choose.emit(
      this.createReturnChoose(this.chooseParams, this.calculationParams)
    );
  }

  createReturnChoose(choose, calc) {
    return {
      quantity: calc.quantity,
      k1: choose.k1.filter(item => item.value === calc.k1)[0].text,
      k2: choose.k2.filter(item => item.value === calc.k2)[0].text
    };
  }

  setCalculationParams(e, param, val) {
    e.preventDefault();
    this.calculationParams[param] = val;
    this.setTables();
  }

  onChooseFormat(e) {
    this.calculationParams[e.param] = e.val;
    this.setTables();
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getGuestQuantity();
  }
}
