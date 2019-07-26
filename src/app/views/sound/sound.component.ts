import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit {
  step = 1;
  progressList: ProgressList[] = [
    {
      active: 'Введите количество человек',
      noActive: 'Количество человек',
      param: 'quantity'
    },
    {
      active: 'Где проводиться мероприятие',
      param: 'k1'
    },
    {
      active: 'Выберите формат',
      noActive: 'Формат',
      param: 'k2'
    }
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(({ step }) => {
      if (step) {
        this.step = Number(step);

        if (step !== 1 && !this.store.getQuestQuantity()) {
          this.router.navigate(['/sound/1']);
        }
      }
    });
  }

  onChoose(e) {
    this.progressList.forEach(item => {
      item.text = e[item.param] ? e[item.param] : '';
    });
  }
}
