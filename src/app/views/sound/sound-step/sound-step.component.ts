import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Range } from 'src/app/shared/models/range';
import { RangeItem } from 'src/app/shared/models/range-item';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';

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
    k1: [{ val: 1.5, text: 'На улице' }, { val: 1, text: 'В помещении' }],
    k2: [
      { val: 1.5, text: 'Концерт' },
      { val: 1, text: 'Банкет' },
      { val: 0.5, text: 'Конференция' }
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
      k1: choose.k1.filter(item => item.val === calc.k1)[0].text,
      k2: choose.k2.filter(item => item.val === calc.k1)[0].text
    };
  }

  setCalculationParams(e, param, val) {
    e.preventDefault();
    this.calculationParams[param] = val;
    this.setTables();
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getQuestQuantity();
  }
}
