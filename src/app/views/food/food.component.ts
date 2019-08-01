import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';
import { SimpleItemCalc } from 'src/app/shared/models/simple-item-calc';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  calculationParams = {
    quantity: 0
  };

  tables = [];
  tablesParams = [];

  tablesSecond = [];
  tablesSecondParams = [];

  fasting;

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tablesParams = [
      {
        title: 'Закуски, канапе',
        data: [
          new SimpleItem('1 час коктейль', 5, 0, 'multiply', 'quantity'),
          new SimpleItem('2 часовой коктейль', 7, 0, 'multiply', 'quantity'),
          new SimpleItem('3 часовой коктейль', 9, 0, 'multiply', 'quantity')
        ]
      },
      {
        title: 'Бокалы (шампанское,вино)',
        data: [
          new SimpleItem('1 час коктейль', 2, 0, 'multiply', 'quantity'),
          new SimpleItem('2 часовой коктейль', 3, 0, 'multiply', 'quantity'),
          new SimpleItem('3 часовой коктейль', 4, 0, 'multiply', 'quantity')
        ]
      }
    ];

    this.tablesSecondParams = [
      {
        title: 'Холодные закуски и салаты',
        data: [
          new SimpleItem('Еда на человека', 250, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 250 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Рыбные блюда',
        data: [
          new SimpleItem('Еда на человека', 150, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 150 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Мясные блюда',
        data: [
          new SimpleItem('Еда на человека', 300, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 300 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Гарнир',
        data: [
          new SimpleItem('Еда на человека', 150, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 150 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Фруктовые нарезки',
        data: [
          new SimpleItem('Еда на человека', 300, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 300 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Торт/десерт',
        data: [
          new SimpleItem('Еда на человека', 150, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 150 / 1000, 0, 'multiply', 'kilos', '1.0-2')
        ]
      },
      {
        title: 'Б/а напитки',
        data: [
          new SimpleItem('Еда на человека', 500, 0, 'multiply', 'grams'),
          new SimpleItem('Всего', 500 / 1000, 0, 'multiply', 'kilos', '1.0-2')
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

    this.tablesSecond = this.calculation.createTables(
      this.tablesSecondParams,
      this.calculationParams
    );

    this.setFasting();
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getGuestQuantity();
  }

  setFasting() {
    this.fasting = new SimpleItemCalc(
      new SimpleItem('Количество постящихся', 0.18, 0, 'multiply', 'people'),
      this.calculationParams.quantity
    );
  }
}
