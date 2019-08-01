import { Component, OnInit } from '@angular/core';
import { SCENE_STEP } from 'src/app/shared/constants';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  step = 1;
  preEndStep = SCENE_STEP.preEnd;
  endStep = SCENE_STEP.end;

  calculationParams = {
    quantity: '',
    quantityScene: '',
    length: '',
    width: '',
    type: 'scene'
  };

  progress: ProgressList[] = [
    {
      active: 'Введите количество человек',
      noActive: 'Количество человек',
      param: 'quantity'
    },
    {
      active: 'Введите параметры зала',
      noActive: 'Параметры зала',
      param: 'hall'
    }
  ];

  progressList: ProgressList[];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(({ step }) => {
      if (step) {
        this.step = Number(step);

        if (
          this.step > 1 &&
          (!this.calculationParams.quantity ||
            !this.calculationParams.quantityScene)
        ) {
          this.router.navigate(['/scene/1'], {
            replaceUrl: false
          });
        }

        if (
          this.step > 2 &&
          (!this.calculationParams.length || !this.calculationParams.width)
        ) {
          this.router.navigate(['/scene/2'], {
            replaceUrl: false
          });
        }
      }
    });

    this.setProgressList();
  }

  onChoose(e) {
    this.progressList.forEach(item => {
      item.text = e[item.param] ? e[item.param] : '';
    });
  }

  setProgressList() {
    this.progressList = this.progress;
    this.setSteps(SCENE_STEP.preEnd, SCENE_STEP.end);
  }

  setSteps(preEnd, end) {
    this.preEndStep = preEnd;
    this.endStep = end;
  }
}
