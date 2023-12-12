// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './features/game-list/game-list.component';
import { GameCardComponent } from './features/game-card/game-card.component';
import { GameFormComponent } from './features/game-form/game-form.component';
import { LendFormComponent } from './features/lend-form/lend-form.component';
import { HomeComponent } from './home/home.component';
import { SellFormComponent } from './features/sell-form/sell-form.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    GameFormComponent,
    LendFormComponent,
    HomeComponent,
    SellFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

