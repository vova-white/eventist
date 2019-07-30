import { Component, OnInit } from '@angular/core';
import {
  LIGHT_STEP,
  LIGHT_FORMAT,
  IMG_PATH,
  LIGHT_FORMAT_COEF
} from 'src/app/shared/constants';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';
import { FormatListItem } from 'src/app/shared/models/format-list-item';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  step = 1;
  preEndStep = LIGHT_STEP.preEnd;
  endStep = LIGHT_STEP.end;

  format: string | number = LIGHT_FORMAT;

  calculationParams = {
    height: 6,
    area: 200,
    format: LIGHT_FORMAT,
    formatCoef: LIGHT_FORMAT_COEF[LIGHT_FORMAT],
    quantity: 100,
    hall: {
      length: '',
      width: '',
      height: '',
      area: '',
      quantity: ''
    },
    scene: {
      length: '',
      width: '',
      height: '',
      area: '',
      quantity: ''
    }
  };

  progress: ProgressList[] = [
    {
      active: 'Выберите высоту помещения',
      noActive: 'Высота помещения',
      param: 'height'
    },
    {
      active: 'Выберите площадь помещения',
      noActive: 'Площадь помещения',
      param: 'area'
    },
    {
      active: 'Выберите формат',
      noActive: 'Формат',
      param: 'format'
    },
    {
      active: 'Введите параметры зала',
      noActive: 'Параметры зала',
      param: 'hall'
    },
    {
      active: 'Введите параметры сцены',
      noActive: 'Параметры сцены',
      param: 'scene'
    }
  ];

  progressList: ProgressList[];

  chooseParams = {
    format: [
      new FormatListItem('banquet', 'Банкет', `${IMG_PATH}format1.png`),
      new FormatListItem('buffet', 'Фуршет', `${IMG_PATH}format2a.png`),
      new FormatListItem('conference', 'Конференция', `${IMG_PATH}format3.png`)
    ]
  };

  formatList = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(({ step }) => {
      if (step) {
        this.step = Number(step);

        // if (this.step !== 1 && this.step < 4 && this.store.getQuestQuantity()) {
        //   this.router.navigate(['/light/4'], { skipLocationChange: true });
        // }
      }
    });

    this.setProgressList();
  }

  onChoose(e) {
    this.setFormat(e.format);

    this.progressList.forEach(item => {
      item.text = e[item.param] ? e[item.param] : '';
    });
  }

  setFormat(format) {
    const newFormat = this.chooseParams.format.filter(
      item => item.text === format
    )[0].value;

    if (this.format !== newFormat) {
      this.setProgressList();
      this.format = newFormat;
      this.calculationParams.formatCoef = LIGHT_FORMAT_COEF[newFormat];
    }
  }

  setProgressList() {
    this.progressList = this.progress;
    this.setSteps(LIGHT_STEP.preEnd, LIGHT_STEP.end);
  }

  setSteps(preEnd, end) {
    this.preEndStep = preEnd;
    this.endStep = end;
  }
}
