import { Component } from '@angular/core';

@Component({
  selector: 'app-lend-form',
  templateUrl: './lend-form.component.html',
  styleUrls: ['./lend-form.component.css']
})
export class LendFormComponent {

  gameTitle: string = '';
  friendEmail: string = '';

  shareGame() {
    // Crear un objeto con los datos del formulario
    const formData = {
      gameTitle: this.gameTitle,
      friendEmail: this.friendEmail
    };

    // Mostrar el objeto en la consola
    console.log('Datos del formulario:', formData);

  }

}
