// game-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game: any; // Ajusta el tipo según tu estructura de datos del juego
  @Input() comprar: boolean | undefined;
  @Input() compartir: boolean | undefined;

  // Agrega estos métodos
  realizarCompra(): void {
    // Lógica para realizar la compra
    console.log('Compra realizada');
  }

  compartirJuego(): void {
    // Lógica para compartir el juego
    console.log('Juego compartido');
  }
}

