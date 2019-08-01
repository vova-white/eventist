import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';
import { RangeItem } from 'src/app/shared/models/range-item';
import { Range } from 'src/app/shared/models/range';
import { CalculationService } from 'src/app/shared/services/calculation.service';

@Component({
  selector: 'app-court-area',
  templateUrl: './court-area.component.html',
  styleUrls: ['./court-area.component.scss']
})
export class CourtAreaComponent implements OnInit {
  calculationParams = {
    quantity: 0
  };

  tables = [];
  tablesParams = [];

  range = [
    new Range(0, 20, 10),
    new Range(20, 50, 15),
    new Range(50, 100, 30),
    new Range(100, 200, 80),
    new Range(200, 400, 100),
    new Range(400, 600, 150),
    new Range(600, 1000, 250),
    new Range(1000, 1500, 375),
    new Range(1500, 2000, 500),
    new Range(2000, 4001, 700),
    new Range(4001, Infinity, 700)
  ];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        data: [
          new SimpleItem('Банкет', 1.7),
          new SimpleItem('Фуршет', 1.43),
          new SimpleItem('Фуршет с рассадкой', 1.55),
          new SimpleItem('Коктейль', 1.1),
          new SimpleItem('П-образно', 2.85),
          new SimpleItem('Театр (плотно)', 1.1),
          new SimpleItem('Театр (свободно)', 1.35),
          new SimpleItem('Общий стол', 3.1),
          new SimpleItem('Класс (столы 45 см)', 1.9305),
          new SimpleItem('Класс (столы 75 см)', 2.2624)
        ]
      },
      {
        title: 'Другие помещения',
        data: [
          new SimpleItem('Танцпол (плотно)', 0.75806),
          new SimpleItem('Танцпол (норма)', 1.278709),
          new SimpleItem('Танцпол (бальные танцы)', 1.971612),
          new SimpleItem('Сцена', 0.1, 9),
          new SimpleItem('Гардероб', 0.11, 6),
          new SimpleItem('Зона курения', 0.4 * 0.07),
          new SimpleItem('Административная зона', 0.08, 10),
          new RangeItem('Кейтеринг', this.range)
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
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getGuestQuantity();
  }
}
