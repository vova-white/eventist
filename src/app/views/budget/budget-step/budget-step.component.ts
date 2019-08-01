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
import { Options } from 'ng5-slider';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-budget-step',
  templateUrl: './budget-step.component.html',
  styleUrls: ['./budget-step.component.scss'],
  providers: [CurrencyPipe]
})
export class BudgetStepComponent implements OnInit, OnChanges {
  @Input() step = 1;
  @Input() endStep: number;
  @Input() chooseParams;
  @Input() calculationParams;
  @Output() choose: EventEmitter<any> = new EventEmitter();

  selected: DynamicComponentData = null;

  options: Options = {
    floor: 0,
    ceil: 100,
    animate: false,
    translate: (): string => {
      return '';
    }
  };

  constructor(private store: StoreService, private currency: CurrencyPipe) {}

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
      budget: this.currency.transform(
        calc.budget,
        'RUB',
        'symbol',
        '1.0-0',
        'ru'
      ),
      commission: calc.commission + '%',
      quantity: calc.quantity
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
