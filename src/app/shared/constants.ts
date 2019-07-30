import { InjectionToken } from '@angular/core';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>(
  'DynamicComponentData'
);

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

export enum ComponentType {
  coffee = 'coffee',
  reception = 'reception',
  buffet = 'buffet',
  banquet = 'banquet',
  wedding = 'wedding'
}
