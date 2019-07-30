import { Component, OnInit } from '@angular/core';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import { FormatListItem } from 'src/app/shared/models/format-list-item';
import {
  DRINK_STEP,
  DRINK_FORMAT,
  IMG_PATH,
  DRINK_TIME
} from 'src/app/shared/constants';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  step = 1;
  preEndStep = DRINK_STEP.preEnd;
  endStep = DRINK_STEP.end;
  format: string | number = DRINK_FORMAT;

  progress: ProgressList[] = [
    {
      active: 'Выберите формат мероприятия',
      noActive: 'Формат мероприятия',
      param: 'format'
    },
    {
      active: 'Введите количество человек',
      noActive: 'Количество человек',
      param: 'quantity'
    },
    {
      active: 'Введите данные об аудитории',
      noActive: 'Данные об аудитории',
      param: 'audience'
    },
    {
      active: 'Продолжительность',
      param: 'time'
    }
  ];

  progressList: ProgressList[];

  calculationParams = {
    format: DRINK_FORMAT,
    quantity: 0,
    audience: {
      gender: 50,
      drinkers: {
        low: 15,
        middle: 85
      }
    },
    time: DRINK_TIME[DRINK_FORMAT]
  };

  chooseParams = {
    format: [
      new FormatListItem('coffee', 'Кофе-брейк', `${IMG_PATH}drink1.png`),
      new FormatListItem('reception', 'Прием', `${IMG_PATH}drink2.png`),
      new FormatListItem('buffet', 'Фуршет', `${IMG_PATH}drink3.png`),
      new FormatListItem('banquet', 'Банкет', `${IMG_PATH}drink4.png`),
      new FormatListItem('wedding', 'Свадьба', `${IMG_PATH}drink5.png`)
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

        if (
          this.step !== 1 &&
          this.step !== 2 &&
          !this.store.getQuestQuantity()
        ) {
          this.router.navigate(['/drink/2'], { skipLocationChange: true });
        }
      }
    });

    this.setProgressList(this.format);
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
      this.setProgressList(newFormat);
      this.format = newFormat;
      this.calculationParams.time = DRINK_TIME[newFormat];
    }
  }

  setProgressList(format) {
    if (format === 'coffee') {
      this.progressList = this.progress.slice(0, 2);
      this.setSteps(2, 3);
    } else {
      this.progressList = this.progress;
      this.setSteps(DRINK_STEP.preEnd, DRINK_STEP.end);
    }
  }

  setSteps(preEnd, end) {
    this.preEndStep = preEnd;
    this.endStep = end;
  }
}
