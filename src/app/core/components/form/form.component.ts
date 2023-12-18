import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../game.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() sale: any = { game: {}, loanDuration: 7 };
  @Input() isLendForm: boolean = false;
  @Input() buttonText: string = 'Comprar';
  @Input() buyerNameLabel: string = 'Nombre y Apellido';
  @Input() buyerEmailLabel: string = 'Correo Electrónico';
  @Output() formSubmit = new EventEmitter<void>();

  gameList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.getGamesObservable().subscribe(games => {
      this.gameList = games;
      this.route.params.subscribe(params => {
        const gameId = Number(params['id']);
        if (!isNaN(gameId)) {
          this.findGameById(gameId);
        }
      });
    });
  }

  findGameById(id: number): void {
    const game = this.gameList.find(game => game.id === id);
    if (game) {
      this.sale.game = game;
      this.sale.price = game.price;
    }
  }

  submitForm() {
    if (this.isLendForm) {
      this.sale.loanDuration = Math.max(0, this.sale.loanDuration);
    }

    console.log(this.sale);
    this.formSubmit.emit();

  }

  onLoanDurationInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = parseInt(inputValue, 10);

    if (this.isLendForm) {
      this.sale.loanDuration = isNaN(numericValue) || numericValue < 1 ? 1 : numericValue;
    }
  }


}
