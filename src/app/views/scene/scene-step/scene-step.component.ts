import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { DynamicComponentData } from 'src/app/shared/interfaces/dynamic-component-data';
import { ComponentType } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-scene-step',
  templateUrl: './scene-step.component.html',
  styleUrls: ['./scene-step.component.scss']
})
export class SceneStepComponent implements OnInit, OnChanges {
  @Input() step = 1;
  @Input() endStep: number;
  @Input() chooseParams;
  @Input() calculationParams;
  @Output() choose: EventEmitter<any> = new EventEmitter();

  selected: DynamicComponentData = null;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.getQuantity();
    this.onChoose();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.step &&
      changes.step.currentValue &&
      changes.step.currentValue === this.endStep
    ) {
      this.loadByString(this.calculationParams.type);
    }
  }

  onChange() {
    this.store.setGuestsQuantity(this.calculationParams.quantity);
    this.getQuantity();

    this.onChoose();
  }

  onChoose() {
    this.choose.emit(this.createReturnChoose('', this.calculationParams));
  }

  createReturnChoose(choose, calc) {
    return {
      quantity: `${calc.quantity} / ${calc.quantityScene}`,
      hall: `${calc.length} м. / ${calc.width} м.`
    };
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getGuestQuantity();
  }

  loadByString(type: ComponentType) {
    this.selected = this.getMock(type);
  }

  getMock(type: ComponentType): DynamicComponentData {
    return {
      meta: {
        type: type
      },
      data: this.calculationParams
    };
  }
}
