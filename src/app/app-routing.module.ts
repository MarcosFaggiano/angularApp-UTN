import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game-list/game-list.component';
import { GameFormComponent } from './features/game-form/game-form.component';
import { SellFormComponent } from './features/sell-form/sell-form.component';
import { LendFormComponent } from './features/lend-form/lend-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/game-list', // Redirige a /game-list cuando se accede a la ruta raíz
    pathMatch: 'full'
  },
  {
    path: 'game-list',
    component: GameListComponent,
  },
  {
    path: 'game-form', // Agrega la ruta para GameFormComponent
    component: GameFormComponent,
  },
  {
    path: 'sell-form', // Agrega la ruta para GameFormComponent
    component: SellFormComponent,
  },
  {
    path: 'lend-form', // Agrega la ruta para GameFormComponent
    component: LendFormComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
