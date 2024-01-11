import { findHeroById } from './services/hero.service';

const hero = findHeroById( 2 ); //hero = undefined

console.log( hero?.name ?? 'No hero found'  ); //?Si hay hero sino?? que muestre Hero not found
