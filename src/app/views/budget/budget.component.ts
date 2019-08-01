import { Component, OnInit } from '@angular/core';
import { BUDGET_STEP } from 'src/app/shared/constants';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  step = 1;
  preEndStep = BUDGET_STEP.preEnd;
  endStep = BUDGET_STEP.end;

  calculationParams = {
    budget: '',
    commission: 0,
    quantity: '',
    type: 'budget'
  };

  progress: ProgressList[] = [
    {
      active: 'Введите бюджет',
      noActive: 'Бюджет',
      param: 'budget'
    },
    {
      active: 'Агентская комиссия (0 - 100%)',
      noActive: 'Агентская комиссия',
      param: 'commission'
    },
    {
      active: 'Введите количество участников',
      noActive: 'Количество участников',
      param: 'quantity'
    }
  ];

  progressList: ProgressList[];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(({ step }) => {
      if (step) {
        this.step = Number(step);

        if (this.step > 1 && !this.calculationParams.budget) {
          this.router.navigate(['/budget/1'], {
            replaceUrl: false
          });
        }

        if (this.step > 3 && !this.calculationParams.quantity) {
          this.router.navigate(['/budget/3'], {
            replaceUrl: false
          });
        }
      }
    });

    this.setProgressList();
  }

  ngOnInit() {}

  onChoose(e) {
    this.progressList.forEach(item => {
      item.text = e[item.param] ? e[item.param] : '';
    });
  }

  setProgressList() {
    this.progressList = this.progress;
    this.setSteps(BUDGET_STEP.preEnd, BUDGET_STEP.end);
  }

  setSteps(preEnd, end) {
    this.preEndStep = preEnd;
    this.endStep = end;
  }
}
