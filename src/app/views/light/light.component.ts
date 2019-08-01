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
    type: 'light',
    format: LIGHT_FORMAT,
    formatCoef: LIGHT_FORMAT_COEF[LIGHT_FORMAT],
    hall: {
      length: '',
      width: '',
      height: '',
      area: '',
      quantity: '',
      multy: 1.43
    },
    scene: {
      length: '',
      width: '',
      height: '',
      area: '',
      quantity: '',
      multy: 0.15
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
      new FormatListItem(
        'banquet',
        'Банкет',
        `${IMG_PATH}format1a.png`,
        `${IMG_PATH}format1.png`
      ),
      new FormatListItem(
        'buffet',
        'Фуршет',
        `${IMG_PATH}format2a.png`,
        `${IMG_PATH}format2.png`
      ),
      new FormatListItem(
        'conference',
        'Конференция',
        `${IMG_PATH}format3a.png`,
        `${IMG_PATH}format3.png`
      ),
      new FormatListItem(
        'club',
        ' Клуб/концерт',
        `${IMG_PATH}format4a.png`,
        `${IMG_PATH}format4.png`
      )
    ]
  };

  formatList = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(({ step }) => {
      if (step) {
        this.step = Number(step);

        if (
          this.step > 4 &&
          (!this.calculationParams.hall.area ||
            !this.calculationParams.hall.height)
        ) {
          this.router.navigate(['/light/4'], {
            replaceUrl: false
          });
        }

        if (
          this.step > 5 &&
          (!this.calculationParams.scene.area ||
            !this.calculationParams.scene.height)
        ) {
          this.router.navigate(['/light/5'], {
            replaceUrl: false
          });
        }
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
