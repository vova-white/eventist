import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from 'src/app/shared/interfaces/dynamic-component';
import {
  DYNAMIC_COMPONENT_DATA,
  ComponentType
} from 'src/app/shared/constants';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { SimpleArrayItem } from 'src/app/shared/models/simple-array-item';
import { ArrayListItem } from 'src/app/shared/interfaces/array-list-item';
import { SimpleItem } from 'src/app/shared/models/simple-item';

@Component({
  selector: 'app-scene-result',
  templateUrl: './scene-result.component.html',
  styleUrls: ['./scene-result.component.scss']
})
export class SceneResultComponent implements DynamicComponent, OnInit {
  tables = [];
  tablesParams = [];

  sceneArea: {
    quantity: ArrayListItem;
    quantityScene: ArrayListItem;
  };

  constructor(
    @Inject(DYNAMIC_COMPONENT_DATA) public data,
    private calculation: CalculationService
  ) {
    this.sceneArea = {
      quantity: {
        mult: 0.09,
        min: 6,
        operation: 'multiply'
      },
      quantityScene: {
        mult: 3,
        min: 0,
        operation: 'multiply'
      }
    };

    const sceneHeightParam =
      this.data.width > this.data.length ? 'width' : 'length';

    this.tablesParams = [
      {
        data: [
          new SimpleArrayItem('Площадь сцены', this.sceneArea, {}),
          new SimpleItem(
            'Высота сцены',
            50,
            4,
            'division',
            'distance',
            '1.0-0',
            sceneHeightParam
          ),
          new SimpleItem(
            'Количество ступенек',
            50,
            0,
            'division',
            'quantity',
            '1.0-0',
            'length'
          )
        ]
      }
    ];
  }

  ngOnInit() {
    this.setTables();
  }

  getComponentType(): ComponentType {
    return ComponentType.scene;
  }

  setTables() {
    this.tables = this.calculation.createTables(this.tablesParams, this.data);

    this.tables.forEach(table =>
      table.data.forEach(
        item =>
          (item.result =
            item.label === 'Количество ступенек'
              ? Math.ceil(item.result / 0.2)
              : item.result)
      )
    );
  }
}
