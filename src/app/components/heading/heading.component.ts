import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PreviousRouteServiceService } from 'src/app/shared/services/previous-route-service.service';

const defaultBack = '/category';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit, OnChanges {
  @Input() showBack = true;
  @Input() heading = '';
  @Input() back = defaultBack;

  constructor(private previousRouteService: PreviousRouteServiceService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.back === 'prev') {
      this.back =
        this.previousRouteService.getPreviousUrl() ===
        this.previousRouteService.getCurrentUrl()
          ? defaultBack
          : this.previousRouteService.getPreviousUrl() || defaultBack;
    }
    if (!this.back) {
      this.back = defaultBack;
    }
  }
}
