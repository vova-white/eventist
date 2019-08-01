import { InjectionToken } from '@angular/core';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>(
  'DynamicComponentData'
);
export enum ComponentType {
  coffee = 'coffee',
  reception = 'reception',
  buffet = 'buffet',
  banquet = 'banquet',
  wedding = 'wedding',
  light = 'light',
  scene = 'scene',
  budget = 'budget'
}

export const IMG_PATH = 'assets/img/';

export const DRINK_FORMAT = 'wedding';
export const DRINK_STEP = {
  preEnd: 4,
  end: 5
};
export const DRINK_TIME = {
  reception: 1,
  buffet: 3,
  banquet: 4,
  wedding: 6
};

export const LIGHT_FORMAT = 'buffet';
export const LIGHT_FORMAT_COEF = {
  banquet: 0.063,
  buffet: 0.051,
  conference: 0.04,
  club: 0.082
};
export const LIGHT_STEP = {
  preEnd: 5,
  end: 6
};

export const SCENE_STEP = {
  preEnd: 2,
  end: 3
};

export const BUDGET_STEP = {
  preEnd: 3,
  end: 4
};
