import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Options, CustomStepDefinition } from 'ng5-slider';
import { StoreService } from 'src/app/shared/services/store.service';
import { pluralize } from 'numeralize-ru';
import { ComponentType } from 'src/app/shared/constants';
import { DynamicComponentData } from 'src/app/shared/interfaces/dynamic-component-data';

@Component({
  selector: 'app-light-step',
  templateUrl: './light-step.component.html',
  styleUrls: ['./light-step.component.scss']
})
export class LightStepComponent implements OnInit, OnChanges {
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

  tables = [];
  tablesParams = [];

  selected: DynamicComponentData = null;

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
    this.getArea();
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

  onChooseFormat(e) {
    this.calculationParams[e.param] = e.val;
    this.onChoose();
  }

  onChange() {
    this.store.setGuestsQuantity(this.calculationParams.quantity);
    this.getArea();

    this.onChoose();
  }

  onKeyup() {
    this.onChoose();
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
      format: choose.format.filter(item => item.value === calc.format)[0].text,
      hall: this.setHallReturn(calc.hall),
      scene: this.setHallReturn(calc.scene)
    };
  }

  setHallReturn(object) {
    const addUnit = (value, unit) => (value ? `${value} ${unit}` : '');

    const newObject = {
      length: addUnit(object.length, 'м.'),
      width: addUnit(object.width, 'м.'),
      height: addUnit(object.height, 'м.'),
      area: addUnit(object.area, 'м<sup>2</sup>'),
      quantity: addUnit(
        object.quantity,
        pluralize(object.quantity, 'человек', 'человека', 'человек')
      )
    };

    return Object.keys(newObject)
      .map(key => newObject[key])
      .filter(item => item)
      .join(' / ');
  }

  getArea() {
    const area = this.store.getCourtArea() || this.calculationParams.area;
    const steps = this.createStepsArray();
    const lastStep = steps.length - 1;

    this.calculationParams.area =
      this.store.getCourtArea() > steps[lastStep].value
        ? steps[lastStep].value
        : this.findClosest(steps, area);
  }

  onRangeChanges() {
    this.onChoose();
  }

  createStepsArray(): CustomStepDefinition[] {
    const steps = [];

    for (let index = 50; index <= 990; index = index + 10) {
      steps.push({ value: index });
    }

    for (let index = 1000; index <= 3000; index = index + 50) {
      steps.push({ value: index });
    }

    return steps;
  }

  findClosest(array: CustomStepDefinition[], num: number): number {
    let minDiff = 1000;
    let ans;

    for (let i = 0; i < array.length; i++) {
      const m = Math.abs(num - array[i].value);
      if (m < minDiff) {
        minDiff = m;
        ans = array[i].value;
      }
    }

    return ans;
  }

  calcArea(e) {
    const target = e.target || e.srcElement;

    if (
      this.calculationParams[target.form.name].length &&
      this.calculationParams[target.form.name].width
    ) {
      this.calculationParams[target.form.name].area =
        this.calculationParams[target.form.name].length *
        this.calculationParams[target.form.name].width;
    } else {
      this.calcAreaByQuantity(e);
    }

    this.onChoose();
  }

  calcAreaByQuantity(e) {
    const target = e.target || e.srcElement;
    this.calculationParams[target.form.name].area = Math.ceil(
      this.calculationParams[target.form.name].quantity *
        this.calculationParams[target.form.name].multy
    );

    if (
      !this.calculationParams[target.form.name].quantity &&
      this.calculationParams[target.form.name].length &&
      this.calculationParams[target.form.name].width
    ) {
      this.calcArea(e);
    }

    this.onChoose();
  }

  disable(disable) {
    if (disable) {
      return false;
    }
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
