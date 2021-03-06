import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './views/category/category.component';
import { MenuBottomComponent } from './components/menu-bottom/menu-bottom.component';
import { LoginComponent } from './views/login/login.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CourtComponent } from './views/court/court.component';
import { ErrorBlockComponent } from './components/error-block/error-block.component';
import { CourtAreaComponent } from './views/court/court-area/court-area.component';
import { CourtGuestsComponent } from './views/court/court-guests/court-guests.component';
import { FoodComponent } from './views/food/food.component';
import { SectionWrapperComponent } from './components/section-wrapper/section-wrapper.component';
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
import { NoCommaPipe } from './shared/pipes/no-comma.pipe';
import { UnitsPipe } from './shared/pipes/units.pipe';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { SoundStepComponent } from './views/sound/sound-step/sound-step.component';
import { LightProgressComponent } from './components/light-progress/light-progress.component';
import { FormatListComponent } from './components/format-list/format-list.component';
import { DrinkStepComponent } from './views/drink/drink-step/drink-step.component';
import { DrinkCoffeeComponent } from './views/drink/drink-coffee/drink-coffee.component';
import { DrinkReceptionComponent } from './views/drink/drink-reception/drink-reception.component';
import { DrinkBuffetComponent } from './views/drink/drink-buffet/drink-buffet.component';
import { DrinkBanquetComponent } from './views/drink/drink-banquet/drink-banquet.component';
import { DrinkWeddingComponent } from './views/drink/drink-wedding/drink-wedding.component';
import { DynamicLoaderDirective } from './shared/directives/dynamic-loader.directive';
import { LightStepComponent } from './views/light/light-step/light-step.component';
import { LightResultComponent } from './views/light/light-result/light-result.component';
import { SceneStepComponent } from './views/scene/scene-step/scene-step.component';
import { SceneResultComponent } from './views/scene/scene-result/scene-result.component';
import { BudgetResultComponent } from './views/budget/budget-result/budget-result.component';
import { BudgetStepComponent } from './views/budget/budget-step/budget-step.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SuppliersComponent } from './views/suppliers/suppliers.component';
import { SupplierComponent } from './views/suppliers/supplier/supplier.component';
import { SuppliersLinkComponent } from './components/suppliers-link/suppliers-link.component';
import { ErrorComponent } from './views/error/error.component';
import { SettingsLanguageComponent } from './views/settings/settings-language/settings-language.component';
import { SettingsNdsComponent } from './views/settings/settings-nds/settings-nds.component';
import { SettingsMetricComponent } from './views/settings/settings-metric/settings-metric.component';
import { SettingsCurrencyComponent } from './views/settings/settings-currency/settings-currency.component';
import { SettingsSubcribeComponent } from './views/settings/settings-subcribe/settings-subcribe.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PolygraphyWeightComponent } from './views/polygraphy/polygraphy-weight/polygraphy-weight.component';
import { PolygraphyFormatComponent } from './views/polygraphy/polygraphy-format/polygraphy-format.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    MenuBottomComponent,
    LoginComponent,
    HeadingComponent,
    CourtComponent,
    ErrorBlockComponent,
    CourtAreaComponent,
    CourtGuestsComponent,
    FoodComponent,
    SectionWrapperComponent,
    DrinkComponent,
    StaffComponent,
    WardrobeComponent,
    LightComponent,
    ToiletComponent,
    SoundComponent,
    SceneComponent,
    ProectionComponent,
    VideoComponent,
    WeatherComponent,
    RiskComponent,
    PolygraphyComponent,
    BudgetComponent,
    SettingsComponent,
    NoCommaPipe,
    UnitsPipe,
    ResultsTableComponent,
    SoundStepComponent,
    LightProgressComponent,
    FormatListComponent,
    DrinkStepComponent,
    DrinkCoffeeComponent,
    DrinkReceptionComponent,
    DrinkBuffetComponent,
    DrinkBanquetComponent,
    DrinkWeddingComponent,
    DynamicLoaderDirective,
    LightStepComponent,
    LightResultComponent,
    SceneStepComponent,
    SceneResultComponent,
    BudgetStepComponent,
    BudgetResultComponent,
    SuppliersComponent,
    SupplierComponent,
    SuppliersLinkComponent,
    ErrorComponent,
    SettingsLanguageComponent,
    SettingsNdsComponent,
    SettingsMetricComponent,
    SettingsCurrencyComponent,
    SettingsSubcribeComponent,
    ProfileComponent,
    PolygraphyWeightComponent,
    PolygraphyFormatComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Ng5SliderModule],
  entryComponents: [
    DrinkCoffeeComponent,
    DrinkReceptionComponent,
    DrinkBuffetComponent,
    DrinkBanquetComponent,
    DrinkWeddingComponent,
    LightResultComponent,
    SceneResultComponent,
    BudgetResultComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
