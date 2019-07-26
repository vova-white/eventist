import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
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
        title: 'Бармены',
        data: [
          new SimpleItem('Пиво и вино', 75, 1, 'division', 'people'),
          new SimpleItem('Полный бар', 50, 1, 'division', 'people'),
          new SimpleItem('Кофе и чай', 75, 1, 'division', 'people')
        ]
      },
      {
        title: 'Официанты',
        data: [
          new SimpleItem('Банкет', 10, 1, 'division', 'people'),
          new SimpleItem('Фуршет', 20, 1, 'division', 'people'),
          new SimpleItem('Буфет', 25, 1, 'division', 'people')
        ]
      },
      {
        title: 'Регистраторы',
        data: [
          new SimpleItem('Бейджи и рассадка', 35, 1, 'division', 'people'),
          new SimpleItem('Только бейджи', 50, 1, 'division', 'people'),
          new SimpleItem('Только списки', 75, 1, 'division', 'people'),
          new SimpleItem('Пригласительные', 100, 1, 'division', 'people')
        ]
      },
      {
        title: 'Другой персонал',
        data: [
          new SimpleItem('Парковщики', 100, 0, 'division', 'people'),
          new SimpleItem('Гардеробщики', 150, 0, 'division', 'people'),
          new SimpleItem('Охранники', 80, 0, 'division', 'people'),
          new SimpleItem('Event Team', 150, 0, 'division', 'people')
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
