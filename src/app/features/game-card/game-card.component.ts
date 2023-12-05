import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game: any; // Ajusta el tipo según tu estructura de datos del juego
  @Input() comprar: boolean | undefined;
  @Input() compartir: boolean | undefined;

  constructor(private router: Router) { }

  realizarCompra(): void {
    // Lógica para realizar la compra
    console.log('Compra realizada');
    // Agrega la navegación a la ruta 'sell-form' después de realizar la compra
    this.router.navigate(['/sell-form']);
  }

  compartirJuego(): void {
    // Lógica para compartir el juego
    console.log('Juego compartido');
    // Agrega la navegación a la ruta 'lend-form' después de compartir el juego
    this.router.navigate(['/lend-form']);
  }
}


