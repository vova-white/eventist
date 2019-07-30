import { ComponentType } from '../constants';

export interface DynamicComponent {
  getComponentType(): ComponentType;
}
