import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Options, CustomStepDefinition } from 'ng5-slider';
import { StoreService } from 'src/app/shared/services/store.service';
import { pluralize } from 'numeralize-ru';

@Component({
  selector: 'app-light-step',
  templateUrl: './light-step.component.html',
  styleUrls: ['./light-step.component.scss']
})
export class LightStepComponent implements OnInit {
  @Input() step = 1;
  @Input() endStep: number;
  @Input() chooseParams;
  @Input() calculationParams;
  @Output() choose: EventEmitter<any> = new EventEmitter();

  optionsHeight: Options = {
    floor: 3,
    ceil: 15,
    animate: false,
    translate: (): string => {
      return '';
    }
  };
  optionsArea: Options;

  constructor(private store: StoreService) {
    this.optionsArea = {
      stepsArray: this.createStepsArray(),
      animate: false,
      translate: (): string => {
        return '';
      }
    };
  }

  ngOnInit() {
    this.getQuantity();
    this.onChoose();
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

  onKeyup(e, form, name) {
    console.log(e.target.form.name);
  }

  onChoose() {
    this.choose.emit(
      this.createReturnChoose(this.chooseParams, this.calculationParams)
    );
  }

  createReturnChoose(choose, calc) {
    return {
      height:
        calc.height + ' ' + pluralize(calc.height, 'метр', 'метра', 'метров'),
      area: calc.area + ' ' + 'м<sup>2</sup>',
      format: choose.format.filter(item => item.value === calc.format)[0].text
    };
  }

  getQuantity() {
    this.calculationParams.quantity = this.store.getQuestQuantity();
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

  createStepsArray(): CustomStepDefinition[] {
    const steps = [];

    for (let index = 50; index <= 990; index = index + 10) {
      steps.push({ value: index, legend: index.toString() });
    }

    for (let index = 1000; index <= 3000; index = index + 50) {
      steps.push({ value: index, legend: index.toString() });
    }

    return steps;
  }
}
