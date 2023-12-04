// game.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private allGames: any[] = [];
  private gamesSubject = new BehaviorSubject<any[]>([]);

  games$ = this.gamesSubject.asObservable();

  constructor() {
    // Inicializa el servicio con una lista vacía de juegos
    this.gamesSubject.next([]);
  }

  addGame(game: any) {
    // Agrega un nuevo juego a la lista completa
    this.allGames = [...this.allGames, game];
    // Notifica a los suscriptores de todos los juegos
    this.gamesSubject.next([...this.allGames]);
  }

  addGamesList(gamesList: any[]) {
    // Agrega una lista de juegos al estado del servicio
    this.allGames = [...this.allGames, ...gamesList];
    // Notifica a los suscriptores de todos los juegos actualizados
    this.gamesSubject.next([...this.allGames]);
  }

  getGamesByGenre(genre: string) {
    // Filtra los juegos por género
    const filteredGames = this.allGames.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
    // Notifica a los suscriptores de los juegos filtrados por género
    this.gamesSubject.next(filteredGames);
  }

  isEmpty(): boolean {
    // Verifica si no hay juegos almacenados
    return this.allGames.length === 0;
  }
}



