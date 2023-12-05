
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: any[] = [
    {
      id: 0,
      name: "The Witcher 3: Wild Hunt",
      reqCpu: {
        CPU: "Intel Core i5-2500K 3.3GHz / AMD Phenom II X4",
        RAM: "6 GB",
        HDD: "35 GB"
      },
      genre: {
        name: "Adventure",
        PEGI: "PEGI 18"
      },
      price: "$29.99",
      gameType: "Single Player",
      imageUrl: "../assets/img/The Witcher 3 - Wild Hunt.jpg"
    },
    {
      id: 1,
      name: "Uncharted 4: A Thief's End",
      reqCpu: {
        CPU: "Intel Core i5-3470 3.2GHz / AMD FX-8350",
        RAM: "8 GB",
        HDD: "50 GB"
      },
      genre: {
        name: "Adventure",
        PEGI: "PEGI 16"
      },
      price: "$39.99",
      gameType: "Single Player",
      imageUrl: "../assets/img/Uncharted 4 - A Thief's End.jpg"
    },
    {
      id: 2,
      name: "The Legend of Zelda",
      reqCpu: {
        CPU: "Intel Core i5-7500 / AMD Ryzen 5 1600X",
        RAM: "8 GB",
        HDD: "30 GB"
      },
      genre: {
        name: "Adventure",
        PEGI: "PEGI 12"
      },
      price: "$49.99",
      gameType: "Single Player",
      imageUrl: "../assets/img/The Legend of Zelda.jpg"
    },

    // Acción:
    {
      id: 3,
      name: "Call of Duty:Warfare",
      reqCpu: {
        CPU: "Intel Core i5-2500K / AMD Ryzen R5 1600X",
        RAM: "12 GB",
        HDD: "175 GB"
      },
      genre: {
        name: "Action",
        PEGI: "PEGI 18"
      },
      price: "$59.99",
      gameType: "Multiplayer",
      imageUrl: "../assets/img/Call of Duty -Warfare.jpg"
    },
    {
      id: 4,
      name: "Devil May Cry 5",
      reqCpu: {
        CPU: "Intel Core i7-4770 3.4GHz / AMD Ryzen 5 1600",
        RAM: "8 GB",
        HDD: "35 GB"
      },
      genre: {
        name: "Action",
        PEGI: "PEGI 18"
      },
      price: "$44.99",
      gameType: "Single Player",
      imageUrl: "../assets/img/Devil May Cry 5.jpg"
    },

    // Estrategia:
    {
      id: 5,
      name: "Sid Meier's Civilization VI",
      reqCpu: {
        CPU: " Intel Core i5-3470 3.2GHz / AMD FX-8350",
        RAM: "8 GB",
        HDD: "12 GB"
      },
      genre: {
        name: "Strategy",
        PEGI: "PEGI 12"
      },
      price: "$29.99",
      gameType: "Single Player",
      imageUrl: "../assets/img/Sid Meier's Civilization VI.jpg"
    },
    {
      id: 6,
      name: "StarCraft II: Wings of Liberty",
      reqCpu: {
        CPU: "Intel Core i3-530 / AMD Phenom II X4 910",
        RAM: "4 GB",
        HDD: "30 GB"
      },
      genre: {
        name: "Strategy",
        PEGI: "PEGI 12"
      },
      price: "$19.99",
      gameType: "Multiplayer",
      imageUrl: "../assets/img/StarCraft II - Wings of Liberty.jpg"
    }
  ];
  games$ = new BehaviorSubject<any[]>([]); // Observable para notificar cambios en los juegos

  addGame(game: any): void {
    // Agregar un juego
    this.games.push(game);
    this.games$.next(this.games.slice()); // Notificar a los suscriptores sobre el cambio
  }


  getGameById(id: number): any | undefined {

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





