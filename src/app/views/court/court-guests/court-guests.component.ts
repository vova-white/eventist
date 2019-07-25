import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-court-guests',
  templateUrl: './court-guests.component.html',
  styleUrls: ['./court-guests.component.scss']
})
export class CourtGuestsComponent implements OnInit {
  calculationParams = {
    area: 0,
    length: null,
    width: null
  };

  table = [];
  tableParams = [];

  constructor(
    private store: StoreService,
    private calculation: CalculationService
  ) {
    this.tableParams = [
      {
        data: [
          new SimpleItem('Банкет', 1.7, 0, 'division', 'people'),
          new SimpleItem('Фуршет', 1.43, 0, 'division', 'people'),
          new SimpleItem('Фуршет с рассадкой', 1.55, 0, 'division', 'people'),
          new SimpleItem('Коктейль', 1.1, 0, 'division', 'people'),
          new SimpleItem('П-образно', 2.85, 0, 'division', 'people'),
          new SimpleItem('Театр (плотно)', 1.1, 0, 'division', 'people'),
          new SimpleItem('Театр (свободно)', 1.35, 0, 'division', 'people'),
          new SimpleItem('Класс', 1.89, 0, 'division', 'people'),
          // TODO: Площадка. Гости. Проверить коеф.ты класс 45см и 75см
          new SimpleItem(
            'Класс (столы 45 см)',
            1.9305,
            0,
            'division',
            'people'
          ),
          new SimpleItem(
            'Класс (столы 75 см)',
            2.2624,
            0,
            'division',
            'people'
          ),
          new SimpleItem('Общий стол', 3.1, 0, 'division', 'people')
        ]
      }
    ];
  }

  ngOnInit() {
    this.getArea();

    this.setTables();
  }

  onChange() {
    this.store.setCourtArea(this.calculationParams.area);
    this.getArea();

    this.setTables();
  }

  setTables() {
    this.table = this.calculation.createTables(
      this.tableParams,
      this.calculationParams
    )[0];
  }

  getArea() {
    this.calculationParams.area = this.store.getCourtArea();
  }

  calcArea() {
    this.calculationParams.area =
      this.calculationParams.length * this.calculationParams.width;
    this.store.setCourtArea(this.calculationParams.area);
    this.onChange();
  }
}
