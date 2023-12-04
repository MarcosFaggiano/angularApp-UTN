// home.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: any[] = [];  // No necesitas @Input() aquí

  constructor(private gameService: GameService) { }

  ngOnInit() {
    // Obtén los juegos del servicio
    this.gameService.games$.subscribe(updatedGames => {
      this.games = updatedGames;
    });
  }
}





