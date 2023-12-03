import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Agrega esta línea
import { FeaturesRoutingModule } from './features.routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameFormComponent } from './game-form/game-form.component';
import { LendFormComponent } from './lend-form/lend-form.component';
import { SellFormComponent } from './sell-form/sell-form.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameFormComponent,
    LendFormComponent,
    SellFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Agrega esta línea
    FeaturesRoutingModule // Importa el módulo de enrutamiento de características
  ]
})
export class FeaturesModule { }
