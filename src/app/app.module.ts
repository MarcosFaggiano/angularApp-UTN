import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';//solo me traigo este que tiene adentro los demas englobados
import { HeaderComponent } from './core/components/header/header.component';
import { FormsModule } from '@angular/forms';// importamos para poder usar fomularios



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule, // Registra el módulo de características
    FormsModule // Agrega FormsModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

