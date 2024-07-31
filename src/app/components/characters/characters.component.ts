import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CharacterComponent],
	providers: [CharacterService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
	private characterService = inject(CharacterService);
	characters$ = this.characterService.getCharacter();
}
