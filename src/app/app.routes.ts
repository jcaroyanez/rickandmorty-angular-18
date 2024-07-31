import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
	{
		path: '',
		component: CharactersComponent
	},
	{
		path: 'character/:id',
		loadComponent: () => import('./components/character-detail/character-detail.component').then((c) => c.CharacterDetailComponent)
	}
];
