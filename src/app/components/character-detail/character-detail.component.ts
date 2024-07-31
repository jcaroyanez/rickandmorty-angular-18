import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { CharacterStatusComponent } from "../character-status/character-status.component";

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, CharacterStatusComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent {
	router = inject(ActivatedRoute);
	characterService = inject(CharacterService);
	id = this.router.snapshot.params['id'];
	character$ = this.characterService.findCharacter(this.id);
}
