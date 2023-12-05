// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToGameForm() {
    this.router.navigate(['/game-form']);
  }

  filterByGenre(genre: string) {
    console.log(`Filtrar por género: ${genre}`);
    this.router.navigate(['/game-list', { genre }]);
  }
}
