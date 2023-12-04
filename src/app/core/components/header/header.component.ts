// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToGameForm() {
    this.router.navigate(['/game-form']);
  }

  filterByGenre(genre: string) {
    console.log(`Filtrar por género: ${genre}`);
    this.router.navigate(['/game-list', { genre }]);
  }
}

// header.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { GameService } from '../../../game.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {

//   constructor(private router: Router, private gameService: GameService) { }

//   navigateToGameForm() {
//     const gamesByGenre = this.gameService.getGamesByGenre(''); // Puedes pasar un género específico si lo necesitas
//     console.log('Juegos filtrados por género desde HeaderComponent:', gamesByGenre);
//     this.router.navigate(['/game-form']);
//   }

//   filterByGenre(genre: string) {
//     const filteredGames = this.gameService.getGamesByGenre(genre);
//     console.log(`Juegos filtrados por género ${genre}:`, filteredGames);

//     // Luego, puedes navegar a la página de game-list con el género seleccionado.
//     this.router.navigate(['/game-list'], { queryParams: { genre: genre } });
//   }
// }

















