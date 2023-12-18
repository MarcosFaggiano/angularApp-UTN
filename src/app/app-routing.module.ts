import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './features/game-list/game-list.component';
import { GameCardComponent } from './features/game-card/game-card.component';
import { GameFormComponent } from './features/game-form/game-form.component';
import { SellFormComponent } from './features/sell-form/sell-form.component';
import { LendFormComponent } from './features/lend-form/lend-form.component';
import { FormComponent } from './core/components/form/form.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game-list/:genre', component: GameListComponent },
  { path: 'game-card', component: GameCardComponent },
  { path: 'game-form', component: GameFormComponent },
  { path: 'sell-form/:id', component: SellFormComponent },
  { path: 'lend-form/:id', component: LendFormComponent },
  { path: 'form', component: FormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
