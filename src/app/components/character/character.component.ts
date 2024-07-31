import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../model/character';
import { NgOptimizedImage, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterStatusComponent } from "../character-status/character-status.component";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
		NgOptimizedImage,
		RouterLink, 
		CharacterStatusComponent,
	],
	providers: [
		{
			provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://rickandmortyapi.com'
		}
	],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
	character = input.required<Character>();
	position = input.required<number>();
}
