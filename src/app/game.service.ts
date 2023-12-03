// game.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesSubject = new BehaviorSubject<any[]>([]);
  games$ = this.gamesSubject.asObservable();

  addGame(game: any) {
    const currentGames = this.gamesSubject.getValue();
    const updatedGames = [...currentGames, game];
    this.gamesSubject.next(updatedGames);
  }

  getGamesByGenre(genre: string) {
    const allGames = this.gamesSubject.getValue();
    return allGames.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
  }
}

