import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { DynamicComponentData } from 'src/app/shared/interfaces/dynamic-component-data';
import { ComponentType } from 'src/app/shared/constants';
import { Options, LabelType } from 'ng5-slider';
import { pluralize } from 'numeralize-ru';

@Component({
  selector: 'app-drink-step',
  templateUrl: './drink-step.component.html',
  styleUrls: ['./drink-step.component.scss']
})
export class DrinkStepComponent implements OnInit, OnChanges {
  @Input() step = 1;
  @Input() endStep: number;
  @Input() chooseParams;
  @Input() calculationParams;
  @Output() choose: EventEmitter<any> = new EventEmitter();

  selected: DynamicComponentData = null;
  canLoad = false;

  optionsGender: Options = {
    floor: 0,
    ceil: 100,
    translate: (): string => {
      return '';
    }
  };

  optionsDrinkers: Options = {
    floor: 0,
    ceil: 100,
    translate: (): string => '',
    combineLabels: (): string => ''
  };

  optionsTime: Options = {
    floor: 1,
    ceil: 8,
    translate: (): string => ''
  };

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
      this.loadByString(this.calculationParams.format);
    }
  }

  onChooseFormat(e) {
    this.calculationParams[e.param] = e.val;
    this.onChoose();
  }

  onChange() {
    this.store.setGuestsQuantity(this.calculationParams.quantity);
    this.getQuantity();

    this.onChoose();
  }

  onChoose() {
    this.choose.emit(
      this.createReturnChoose(this.chooseParams, this.calculationParams)
    );
  }

  createReturnChoose(choose, calc) {
    return {
      quantity: calc.quantity,
      format: choose.format.filter(item => item.value === calc.format)[0].text,
      audience: this.getAudienceInfo(calc.audience),
      time: calc.time + ' ' + pluralize(calc.time, 'час', 'часа', 'часов')
    };
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getQuestQuantity();
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

  onRangeChanges() {
    this.onChoose();
  }

  getAudienceInfo(audience) {
    const male = audience.gender;
    const female = 100 - audience.gender;
    const low = audience.drinkers.low;
    const middle = 100 - (100 - audience.drinkers.middle + low);
    const hight = 100 - middle - low;
    return `${male}% мужчин / ${female}% женщин / ${low}% мало / ${middle}% средние / ${hight}% энтузиасты`;
  }
}
