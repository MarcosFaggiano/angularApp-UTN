import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game: any;
  @Input() comprar: boolean | undefined;
  @Input() compartir: boolean | undefined;

  constructor(private router: Router) { }

  realizarCompra(): void {

    console.log('Compra realizada');
    this.router.navigate(['/sell-form']);
  }

  compartirJuego(): void {
    console.log('Juego compartido');
    this.router.navigate(['/lend-form']);
  }
}


