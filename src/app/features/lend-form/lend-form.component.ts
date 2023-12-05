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

    const formData = {
      gameTitle: this.gameTitle,
      friendEmail: this.friendEmail
    };

    console.log('Datos del formulario:', formData);

  }

}
