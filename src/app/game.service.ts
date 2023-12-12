import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'http://localhost:3000/games';
  private games$ = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    // Al inicializar el servicio, obtén los juegos y actualiza el BehaviorSubject
    this.getGames().subscribe((games) => {
      this.games$.next(games);
    });
  }

  addGame(game: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, game);
  }

  getGameById(id: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGamesByGenre(genre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?genre.name=${genre}`);
  }

  // Método para obtener el BehaviorSubject como Observable
  getGamesObservable(): Observable<any[]> {
    return this.games$.asObservable();
  }
}







// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class GameService {
//   private games: any[] = [
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
//       gameType: "Single Player",
//       imageUrl: "../assets/img/The Witcher 3 - Wild Hunt.jpg"
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
//       gameType: "Single Player",
//       imageUrl: "../assets/img/Uncharted 4 - A Thief's End.jpg"
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
//       gameType: "Single Player",
//       imageUrl: "../assets/img/The Legend of Zelda.jpg"
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
//       gameType: "Multiplayer",
//       imageUrl: "../assets/img/Call of Duty -Warfare.jpg"
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
//       gameType: "Single Player",
//       imageUrl: "../assets/img/Devil May Cry 5.jpg"
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
//       gameType: "Single Player",
//       imageUrl: "../assets/img/Sid Meier's Civilization VI.jpg"
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
//       gameType: "Multiplayer",
//       imageUrl: "../assets/img/StarCraft II - Wings of Liberty.jpg"
//     }
//   ];
//   games$ = new BehaviorSubject<any[]>([]);

//   addGame(game: any): void {

//     this.games.push(game);
//     this.games$.next(this.games.slice());
//   }


//   getGameById(id: number): any | undefined {

//     return this.games.find((game) => game.id === id);
//   }

//   getGames(): any[] {

//     return this.games.slice();
//   }

//   getGamesByGenre(genre: string): any[] {

//     const filteredGames = this.games.filter((game) => game.genre.name.toLowerCase() === genre.toLowerCase());
//     return filteredGames;
//   }
// }

