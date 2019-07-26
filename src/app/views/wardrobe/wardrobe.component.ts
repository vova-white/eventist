import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent implements OnInit {
  calculationParams = {
    quantity: 0
  };

  tables = [];
  tablesParams = [];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        data: [
          new SimpleItem(
            'Необходимое количество гардеробщиков',
            180,
            1,
            'division',
            'people'
          ),
          new SimpleItem('Площадь гардероба (плечики)', 0.11, 6),
          new SimpleItem('Площадь гардероба (крючки)', 0.055, 6)
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
    this.calculationParams.quantity = this.store.getQuestQuantity();
  }
}
