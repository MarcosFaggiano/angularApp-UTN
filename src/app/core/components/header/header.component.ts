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
    const filteredGames = this.gameService.getGamesByGenre(genre);
    console.log(`Juegos de ${genre}:`, filteredGames);
    // Puedes hacer algo más con los juegos filtrados si es necesario
  }
}


