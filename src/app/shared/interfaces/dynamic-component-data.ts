import { ComponentType } from '../constants';

export interface DynamicComponentData {
  meta: { type: ComponentType };
  data?: any;
}
