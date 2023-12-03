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
}
