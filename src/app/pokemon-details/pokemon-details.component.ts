import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/common/services/pokemon.service';
import { Pokemon } from 'src/common/models/pokemon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(private pokeService: PokemonService) {}

  pokemon: any;

  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe((res) => (this.pokemon = res));
  }
}
