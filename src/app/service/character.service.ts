import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterResponse } from '../model/character';
import { mapCharacter } from '../adapter/character';
import { URL_BASE } from '../constants/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

	getCharacter(): Observable<Character[]> {
		return this.http.get<CharacterResponse>(`${URL_BASE}/character`)
		.pipe(
			map((response) => mapCharacter(response))
		);
	}

	findCharacter(id: string): Observable<Character> {
		return this.http.get<Character>(`${URL_BASE}/character/${id}`);
	}
}
