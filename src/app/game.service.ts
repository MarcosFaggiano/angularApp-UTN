// game.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: any[] = []; // Almacena la lista de juegos
  games$ = new BehaviorSubject<any[]>([]); // Observable para notificar cambios en los juegos

  addGame(game: any): void {
    // Agregar un juego
    this.games.push(game);
    this.games$.next(this.games.slice()); // Notificar a los suscriptores sobre el cambio
  }

  getGameById(id: number): any | undefined {
    // Obtener un juego por ID
    return this.games.find((game) => game.id === id);
  }

  getGames(): any[] {
    // Obtener todos los juegos
    return this.games.slice(); // Devolver una copia para evitar manipulaciones no deseadas
  }

  getGamesByGenre(genre: string): any[] {
    // Obtener juegos filtrados por género
    const filteredGames = this.games.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
    return filteredGames;
  }
}








// game.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class GameService {
//   private allGames: any[] = []; // Almacena todos los juegos
//   private gamesSubject = new BehaviorSubject<any[]>([]);
//   games$: Observable<any[]> = this.gamesSubject.asObservable();

//   addGame(game: any) {
//     this.allGames.push(game); // Agrega el juego a la lista completa
//     this.gamesSubject.next(this.allGames); // Notifica a los suscriptores de todos los juegos
//   }

//   getGamesByGenre(genre: string) {
//     const filteredGames = this.allGames.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
//     this.gamesSubject.next(filteredGames); // Notifica a los suscriptores de los juegos filtrados por género
//   }
// }





