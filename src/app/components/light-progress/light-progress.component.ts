import { Component, OnInit, Input } from '@angular/core';
import { ProgressList } from 'src/app/shared/interfaces/progress-list';

@Component({
  selector: 'app-light-progress',
  templateUrl: './light-progress.component.html',
  styleUrls: ['./light-progress.component.scss']
})
export class LightProgressComponent implements OnInit {
  @Input() step = 1;
  @Input() list: ProgressList[];

  constructor() {}

  ngOnInit() {}
}
