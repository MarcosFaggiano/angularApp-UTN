// form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../game.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() sale: any = { game: {}, loanDuration: 7 }; // Agrega la propiedad loanDuration con un valor predeterminado
  @Input() isLendForm: boolean = false; // Nuevo atributo para indicar si es un formulario de préstamo
  @Input() buttonText: string = 'Comprar'; // Añade un nuevo atributo de entrada para el texto del botón
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
    const numericValue = parseFloat(inputValue);

    if (this.isLendForm) {
      // Si el valor ingresado no es un número válido, establece loanDuration en 0
      this.sale.loanDuration = isNaN(numericValue) ? 0 : Math.max(0, numericValue);
    }
  }

}




