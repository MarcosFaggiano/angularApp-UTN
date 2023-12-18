import { Component } from '@angular/core';

@Component({
  selector: 'app-lend-form',
  templateUrl: './lend-form.component.html',
  styleUrls: ['./lend-form.component.css']
})
export class LendFormComponent {

  sale: any = { game: {} };

  lendForm() {
    console.log(this.sale);

  }
}




