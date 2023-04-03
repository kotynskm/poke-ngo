import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  // api to get pokemon by name
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  getPokemon() {
    return this.http
      .get(this.pokeUrl)
      .pipe(
        tap((data) => console.log('This is the data,', JSON.stringify(data)))
      );
  }
}
