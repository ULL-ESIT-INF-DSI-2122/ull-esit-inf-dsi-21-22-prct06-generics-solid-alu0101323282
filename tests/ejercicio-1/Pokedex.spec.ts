import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-1/Pokedex';
import {Charmander} from '../../src/ejercicio-1/Pokemon/Charmander';
import {Batman} from '../../src/ejercicio-1/DC/Batman';
import {Goku} from '../../src/ejercicio-1/DragonBall/Goku';


describe('Pruebas clase Combat', () => {
  let charmander: Charmander;
  let batman: Batman;
  let goku: Goku;
  let pokedex: Pokedex;
  before(function() { // #3
    charmander = new Charmander;
    batman = new Batman;
    goku = new Goku;
    pokedex = new Pokedex([charmander, goku]);
  });
  it('Pokedex([charmander, goku]) is not equal to null', () => {
    expect(new Pokedex([charmander, goku])).not.to.be.equal(null);
  });
  it('pokedex.getFighters() returns [charmander, goku]', () => {
    expect(pokedex.getFighters()).to.be.eql([charmander, goku]);
  });
  it('pokedex.addFighter(batman) adds batman to the pokedex', () => {
    pokedex.addFighter(batman);
    expect(pokedex.getFighters()).to.be.eql([charmander, goku, batman]);
  });
  it('pokedex.removeFighters(1) removes goku from the pokedex', () => {
    pokedex.removeFighters(1);
    expect(pokedex.getFighters()).to.be.eql([charmander, batman]);
  });
  it('pokedex.searchByName(\'Batman\') returns [batman]', () => {
    expect(pokedex.searchByName('Batman')).to.be.eql([batman]);
  });
});