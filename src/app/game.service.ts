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

  getGamesObservable(): Observable<any[]> {
    return this.games$.asObservable();
  }
}
