// game.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private allGames: any[] = []; // Almacena todos los juegos
  private gamesSubject = new BehaviorSubject<any[]>([]);
  games$ = this.gamesSubject.asObservable();

  addGame(game: any) {
    this.allGames.push(game); // Agrega el juego a la lista completa
    this.gamesSubject.next(this.allGames); // Notifica a los suscriptores de todos los juegos
  }

  getGamesByGenre(genre: string) {
    const filteredGames = this.allGames.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
    this.gamesSubject.next(filteredGames); // Notifica a los suscriptores de los juegos filtrados por género
  }
}


