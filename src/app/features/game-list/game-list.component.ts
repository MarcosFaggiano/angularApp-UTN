import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../game.service';
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
  imageUrl: string;
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
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getGamesObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((games) => {
        this.games = games;

        if (this.games.length === 0) {
          const exampleGames: Game[] = [
            // ... tus ejemplos de juegos
          ];

          for (const game of exampleGames) {
            this.gameService.addGame(game).subscribe(() => {
              // Recargar la lista de juegos después de agregar uno nuevo
              this.gameService.getGamesObservable().subscribe((updatedGames) => {
                this.games = updatedGames;
                this.updateFilteredGames();
              });
            });
          }
        } else {
          this.updateFilteredGames();
        }
      });

    // Acceder al ActivatedRoute y usar paramMap
    this.route.paramMap.subscribe((params) => {
      this.genreFilter = params.get('genre');
      this.updateFilteredGames();
    });

    this.gameService.getGamesObservable()
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
      this.gameService.getGamesByGenre(this.genreFilter)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((filteredGames) => {
          this.filteredGames = filteredGames;
        });
    }
    console.log('Juegos filtrados:', this.filteredGames);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


