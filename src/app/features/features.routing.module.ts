import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './game-form/game-form.component';


const routes: Routes = [
  { path: 'gamesgame-form', component: GameFormComponent },
  // Puedes agregar más rutas específicas de características aquí
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
