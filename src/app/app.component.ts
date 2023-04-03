import { Component } from '@angular/core';
import { PokemonService } from 'src/common/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private pokeService: PokemonService) {}

  title = 'poke-ngo';
  pokeName: string = '';
  pokemon: any;
  errorMessage: string = '';

  setValue(): void {
    console.log('The value is: ', this.pokeName);
    this.pokeService.getPokemon(this.pokeName).subscribe({
      next: (res) => {
        this.pokemon = res;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.pokeName = '';
    this.pokemon = null;
  }
}
