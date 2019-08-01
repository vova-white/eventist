import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
import { LoginComponent } from './views/login/login.component';
import { CourtComponent } from './views/court/court.component';
import { FoodComponent } from './views/food/food.component';
import { DrinkComponent } from './views/drink/drink.component';
import { StaffComponent } from './views/staff/staff.component';
import { WardrobeComponent } from './views/wardrobe/wardrobe.component';
import { LightComponent } from './views/light/light.component';
import { ToiletComponent } from './views/toilet/toilet.component';
import { SoundComponent } from './views/sound/sound.component';
import { SceneComponent } from './views/scene/scene.component';
import { ProectionComponent } from './views/proection/proection.component';
import { VideoComponent } from './views/video/video.component';
import { WeatherComponent } from './views/weather/weather.component';
import { RiskComponent } from './views/risk/risk.component';
import { PolygraphyComponent } from './views/polygraphy/polygraphy.component';
import { BudgetComponent } from './views/budget/budget.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SuppliersComponent } from './views/suppliers/suppliers.component';
import { SupplierComponent } from './views/suppliers/supplier/supplier.component';
import { ErrorComponent } from './views/error/error.component';
import { SettingsLanguageComponent } from './views/settings/settings-language/settings-language.component';
import { SettingsNdsComponent } from './views/settings/settings-nds/settings-nds.component';
import { SettingsMetricComponent } from './views/settings/settings-metric/settings-metric.component';
import { SettingsCurrencyComponent } from './views/settings/settings-currency/settings-currency.component';
import { SettingsSubcribeComponent } from './views/settings/settings-subcribe/settings-subcribe.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: 'settings/language', component: SettingsLanguageComponent },
  { path: 'settings/nds', component: SettingsNdsComponent },
  { path: 'settings/metric', component: SettingsMetricComponent },
  { path: 'settings/currency', component: SettingsCurrencyComponent },
  { path: 'settings/subscribe', component: SettingsSubcribeComponent },
  {
    path: 'court',
    component: CourtComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'drink',
    redirectTo: 'drink/1'
  },
  {
    path: 'drink/:step',
    component: DrinkComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'wardrobe',
    component: WardrobeComponent
  },
  {
    path: 'light',
    redirectTo: 'light/1'
  },
  {
    path: 'light/:step',
    component: LightComponent
  },
  {
    path: 'toilet',
    component: ToiletComponent
  },
  {
    path: 'sound',
    redirectTo: 'sound/1'
  },
  {
    path: 'sound/:step',
    component: SoundComponent
  },
  {
    path: 'scene',
    redirectTo: 'scene/1'
  },
  {
    path: 'scene/:step',
    component: SceneComponent
  },
  {
    path: 'proection',
    component: ProectionComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'risk',
    component: RiskComponent
  },
  {
    path: 'polygraphy',
    component: PolygraphyComponent
  },
  {
    path: 'budget',
    redirectTo: 'budget/1'
  },
  {
    path: 'budget/:step',
    component: BudgetComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'suppliers/:id',
    component: SupplierComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
