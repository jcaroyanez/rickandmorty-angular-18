import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StatusType } from '../../model/character';

@Component({
  selector: 'app-character-status',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './character-status.component.html',
  styleUrl: './character-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterStatusComponent {
	status = input.required<string>();

	getColor() {
		switch(this.status().toLocaleLowerCase()) {
			case StatusType.Alive:
				return '#36BA98';
			case StatusType.Dead:
				return '#EF5A6F';	
			case StatusType.Unknown:
				return '#758694';		 
		}

		return '';
	}
}
