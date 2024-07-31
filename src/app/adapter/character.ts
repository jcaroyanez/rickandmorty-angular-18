import { Character, CharacterResponse, MATCH_STATUS } from "../model/character";

export const mapCharacter = (value: CharacterResponse): Character[] => {
	return value.results;
}