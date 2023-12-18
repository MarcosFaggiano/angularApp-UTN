import { Component } from '@angular/core';
import { FormComponent } from 'src/app/core/components/form/form.component';

@Component({
  selector: 'app-lend-form',
  templateUrl: './lend-form.component.html',
  styleUrls: ['./lend-form.component.css']
})
export class LendFormComponent {

  sale: any = { game: {} };

  lendForm() {
    console.log(this.sale);
    // Agrega aquí la lógica para compartir el juego
  }
}




