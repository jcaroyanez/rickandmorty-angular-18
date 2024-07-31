interface TypeCharacter {
	name: string;
	url: string;
}

interface Origin extends TypeCharacter {}
interface Location extends TypeCharacter {}

export interface Character {
	id: string;
	name: string;
	status: string;
	species: string;
	type: string;
	origin: Origin;
	location: Location;
	image: string;
	url: string;
	gender: string
}

export interface CharacterResponse {
	info: {
		count: number;
		pages: number;
		next: string;
	},
	results: Character[];
}

export const MATCH_STATUS: Record<string, string> = {
	unknown: 'desconocido',
	dead: 'muerto',
	alive: 'vivo'
}

export enum StatusType {
	Unknown = 'unknown',
	Dead = 'dead',
	Alive = 'alive'
}