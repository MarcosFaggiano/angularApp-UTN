// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private gameService: GameService) { }

  navigateToGameForm() {
    const gamesByGenre = this.gameService.getGamesByGenre(''); // Puedes pasar un género específico si lo necesitas
    console.log('Juegos filtrados por género desde HeaderComponent:', gamesByGenre);
    this.router.navigate(['/game-form']);
  }

  showGamesByGenre(genre: string) {
    this.gameService.getGamesByGenre(genre);
  }
}



