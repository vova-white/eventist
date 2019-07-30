import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injector
} from '@angular/core';
import { ComponentType, DYNAMIC_COMPONENT_DATA } from '../constants';
import { DynamicComponentData } from '../interfaces/dynamic-component-data';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective {
  @Input() set data(data: DynamicComponentData) {
    this.load(data);
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  load(component: DynamicComponentData): any {
    if (!component) {
      throw new Error('failed to load dynamic component');
    }

    const factory = this.getComponentFactory(component.meta.type);

    const injector = this.createInjector(
      component.data,
      this.viewContainerRef.parentInjector
    );

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(factory, null, injector);
  }

  getComponentFactory(type: ComponentType) {
    const factories = Array.from<any>(this.resolver['_factories'].keys());

    const factoryClass = factories.find(
      item =>
        item.prototype.getComponentType &&
        item.prototype.getComponentType() === type
    );

    return this.resolver.resolveComponentFactory(factoryClass);
  }

  createInjector(data: DynamicComponentData, parentInjector: Injector) {
    const staticProvider = [
      { provide: DYNAMIC_COMPONENT_DATA, useValue: data }
    ];

    return Injector.create({
      providers: staticProvider,
      parent: parentInjector
    });
  }
}
