import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Wolverine', description: 'Wolverine is a mutant who possesses animal-keen senses, enhanced physical capabilities, powerful regenerative ability known as a healing factor, and three retractable claws in each hand.' },
      { id: 12, name: 'Jean Gray', description: 'Jean Grey-Summers is a fictional superhero appearing in American comic books published by Marvel Comics. The character has been known under the aliases Marvel Girl, Phoenix, and Dark Phoenix. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in The X-Men #1.' },
      { id: 13, name: 'Cyclops', description: 'Cyclops is a fictional superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the comic book The X-Men.' },
      { id: 14, name: 'Storm', description: 'Storm is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer Len Wein and artist Dave Cockrum, first appearing in Giant-Size X-Men #1. Cockrums original concept for a character with the power of weather control was of a male.' },
      { id: 15, name: 'Nightcrawler', description: 'Nightcrawler is a fictional superhero appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. Created by writer Len Wein and artist Dave Cockrum, he debuted in the comic book Giant-Size X-Men #1.' },
      { id: 16, name: 'Professor X', description: 'Professor Charles Xavier is a fictional character appearing in American comic books published by Marvel Comics. The character is depicted as the founder and sometimes leader of the X-Men. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in The X-Men #1.' },
      { id: 17, name: 'Rogue', description: 'Rogue is a fictional superhero appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. The character debuted in Avengers Annual #10 as a villain, but she joined the X-Men soon thereafter. ' },
      { id: 18, name: 'Magneto', description: 'Magneto is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. Created by writer Stan Lee and artist Jack Kirby, the character first appears in The X-Men #1 as an adversary of the X-Men.' },
      { id: 19, name: 'Mystique', description: 'Mystique is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. Created by artist David Cockrum and writer Chris Claremont, she first appeared in the comic book Ms. Marvel #16, published in 1978.' },
      { id: 10, name: 'Quicksilver', description: 'Quicksilver is a fictional character appearing in American comic books published by Marvel Comics. The character first appeared in the comic book X-Men #4 and was created by Stan Lee and Jack Kirby. ' }, 
      { id: 20, name: 'Kitty Pryde', description: 'Katherine Anne "Kitty" Pryde is a fictional superhero appearing in American comic books published by Marvel Comics, commonly in association with the X-Men. The character first appeared in Uncanny X-Men #129 and was co-created by writer-artist John Byrne and Chris Claremont.'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 20;
  }
}