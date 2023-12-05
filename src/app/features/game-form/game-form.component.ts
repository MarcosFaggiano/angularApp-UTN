import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {

  newGame = {
    id: 5,
    name: "",
    reqCpu: {
      CPU: "",
      RAM: "",
      HDD: ""
    },
    genre: {
      name: "",
      PEGI: ""
    },
    price: "",
    gameType: ""
  };

  constructor(private gameService: GameService) { }

  submitForm() {
    this.gameService.addGame(this.newGame);
    console.log(this.newGame);

    this.resetForm();
  }

  resetForm() {
    this.newGame = {
      id: 5,
      name: "",
      reqCpu: {
        CPU: "",
        RAM: "",
        HDD: ""
      },
      genre: {
        name: "",
        PEGI: ""
      },
      price: "",
      gameType: ""
    };
  }
}

