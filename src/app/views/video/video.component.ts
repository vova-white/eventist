import { Component, OnInit } from '@angular/core';
import { Range } from 'src/app/shared/models/range';
import { StoreService } from 'src/app/shared/services/store.service';
import { RangeItem } from 'src/app/shared/models/range-item';
import { CalculationService } from 'src/app/shared/services/calculation.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  calculationParams = {
    quantity: 0
  };

  tables = [];
  tablesParams = [];

  range = [
    new Range(0, 501, 2),
    new Range(501, 1501, 3),
    new Range(1501, 3001, 4),
    new Range(3001, 5001, 5),
    new Range(5001, 10001, 7),
    new Range(10001, Infinity, 10)
  ];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        data: [
          new RangeItem(
            'Необходимое количество видео-камер',
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
