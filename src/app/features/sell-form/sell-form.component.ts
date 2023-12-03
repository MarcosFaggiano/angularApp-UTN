import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Game {
  id: number;
  name: string;
  reqCpu: {
    CPU: string;
    RAM: string;
    HDD: string;
  };
  genre: {
    name: string;
    PEGI: string;
  };
  price: string;
  gameType: string;
}

@Component({
  selector: 'app-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.css']
})
export class SellFormComponent implements OnInit {

  gameList: Game[] = [];

  sale = {
    game: null as Game | null,
    buyerName: "",
    price: "",
    paymentMethod: ""
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gameId = params['id'];
      if (gameId) {
        this.sale.game = this.findGameById(+gameId);
      }
    });
  }

  findGameById(id: number): Game | null {
    return this.gameList.find(game => game.id === id) || null;
  }

  submitForm() {
    console.log(this.sale);
    // Agrega la lógica adicional, como enviar la venta a un servicio, etc.
  }
}
