import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const qas = [
      {
        taskStory: 'This is one of the large warehouses.'
                    + 'The work can be a drudge but there are ways to get around this if you can build machines!',
        taskText: 'Your task is to add liquid to containers',
        grid: false,
        qa : [
            { q: 'Write an expression for b fewer the 63" , "a":"63-b' },
            { q: 'Write an expression for p fewer the 107" , "a":"107-p' },
            { q: 'Write an expression for u more than 38" , "a":"38+u'}
        ]
    }
    ];
    return {qas};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
