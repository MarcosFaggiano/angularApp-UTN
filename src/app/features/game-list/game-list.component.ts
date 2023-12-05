import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../game.service';
import { ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Game {
  id: number;
  name: string;
  reqCpu: {
    CPU: string;
    RAM: string;
    HDD: string;
  };
  genre: {
    name: string;
    PEGI: string;
  };
  price: string;
  gameType: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  filteredGames: Game[] = [];
  genreFilter: string | null = null;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Agregar ejemplos de juegos al servicio (solo si la lista está vacía)
    if (this.gameService.getGames().length === 0) {
      const exampleGames: Game[] = [
        // ... (juegos de ejemplo)
      ];

      for (const game of exampleGames) {
        this.gameService.addGame(game);
      }
    }

    // Obtener juegos desde el servicio y almacenarlos localmente
    this.games = this.gameService.getGames();

    // Obtener el valor del parámetro de la ruta
    this.route.paramMap.subscribe((params) => {
      this.genreFilter = params.get('genre');
      this.updateFilteredGames();
    });

    // Suscribirse a cambios en los juegos y actualizar la lista filtrada
    this.gameService.games$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.updateFilteredGames());
  }

  filterByGenre(genre: string): void {
    this.genreFilter = genre;
    this.updateFilteredGames();
    console.log('Filtrado por género:', this.genreFilter);
  }

  private updateFilteredGames(): void {
    if (!this.genreFilter) {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.gameService.getGamesByGenre(this.genreFilter);
    }
    console.log('Juegos filtrados:', this.filteredGames);

    // Forzar la detección de cambios
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}










// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-game-list',
//   templateUrl: './game-list.component.html',
//   styleUrls: ['./game-list.component.css'],
// })
// export class GameListComponent implements OnInit {
//   @Input() games: any[] = [
//     {
//       id: 0,
//       name: "The Witcher 3: Wild Hunt",
//       reqCpu: {
//         CPU: "Intel Core i5-2500K 3.3GHz / AMD Phenom II X4",
//         RAM: "6 GB",
//         HDD: "35 GB"
//       },
//       genre: {
//         name: "Adventure",
//         PEGI: "PEGI 18"
//       },
//       price: "$29.99",
//       gameType: "Single Player"
//     },
//     {
//       id: 1,
//       name: "Uncharted 4: A Thief's End",
//       reqCpu: {
//         CPU: "Intel Core i5-3470 3.2GHz / AMD FX-8350",
//         RAM: "8 GB",
//         HDD: "50 GB"
//       },
//       genre: {
//         name: "Adventure",
//         PEGI: "PEGI 16"
//       },
//       price: "$39.99",
//       gameType: "Single Player"
//     },
//     {
//       id: 2,
//       name: "The Legend of Zelda",
//       reqCpu: {
//         CPU: "Intel Core i5-7500 / AMD Ryzen 5 1600X",
//         RAM: "8 GB",
//         HDD: "30 GB"
//       },
//       genre: {
//         name: "Adventure",
//         PEGI: "PEGI 12"
//       },
//       price: "$49.99",
//       gameType: "Single Player"
//     },

//     // Acción:
//     {
//       id: 3,
//       name: "Call of Duty:Warfare",
//       reqCpu: {
//         CPU: "Intel Core i5-2500K / AMD Ryzen R5 1600X",
//         RAM: "12 GB",
//         HDD: "175 GB"
//       },
//       genre: {
//         name: "Action",
//         PEGI: "PEGI 18"
//       },
//       price: "$59.99",
//       gameType: "Multiplayer"
//     },
//     {
//       id: 4,
//       name: "Devil May Cry 5",
//       reqCpu: {
//         CPU: "Intel Core i7-4770 3.4GHz / AMD Ryzen 5 1600",
//         RAM: "8 GB",
//         HDD: "35 GB"
//       },
//       genre: {
//         name: "Action",
//         PEGI: "PEGI 18"
//       },
//       price: "$44.99",
//       gameType: "Single Player"
//     },

//     // Estrategia:
//     {
//       id: 5,
//       name: "Sid Meier's Civilization VI",
//       reqCpu: {
//         CPU: " Intel Core i5-3470 3.2GHz / AMD FX-8350",
//         RAM: "8 GB",
//         HDD: "12 GB"
//       },
//       genre: {
//         name: "Strategy",
//         PEGI: "PEGI 12"
//       },
//       price: "$29.99",
//       gameType: "Single Player"
//     },
//     {
//       id: 6,
//       name: "StarCraft II: Wings of Liberty",
//       reqCpu: {
//         CPU: "Intel Core i3-530 / AMD Phenom II X4 910",
//         RAM: "4 GB",
//         HDD: "30 GB"
//       },
//       genre: {
//         name: "Strategy",
//         PEGI: "PEGI 12"
//       },
//       price: "$19.99",
//       gameType: "Multiplayer"
//     }
//     // Puedes agregar más juegos según tus necesidades
//   ];

//   filteredGames: any[] = [];
//   genreFilter: string | null = null;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     // Obtener el valor del parámetro de la ruta
//     this.route.paramMap.subscribe(params => {
//       this.genreFilter = params.get('genre');
//       this.updateFilteredGames();
//     });
//   }

//   private updateFilteredGames(): void {
//     if (!this.genreFilter) {
//       this.filteredGames = this.games;
//     } else {
//       this.filteredGames = this.games.filter(game => game.genre.name === this.genreFilter);
//     }
//   }
// }
