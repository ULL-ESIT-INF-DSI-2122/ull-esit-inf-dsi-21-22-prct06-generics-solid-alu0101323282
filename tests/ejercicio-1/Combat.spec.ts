import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/Combat';
import {Charmander} from '../../src/ejercicio-1/Pokemon/Charmander';
import {Pikachu} from '../../src/ejercicio-1/Pokemon/Pikachu';
import {Batman} from '../../src/ejercicio-1/DC/Batman';
import {Superman} from '../../src/ejercicio-1/DC/Superman';
import {Hulk} from '../../src/ejercicio-1/Marvel/Hulk';
import {Spiderman} from '../../src/ejercicio-1/Marvel/Spiderman';
import {Goku} from '../../src/ejercicio-1/DragonBall/Goku';
import {Krilin} from '../../src/ejercicio-1/DragonBall/Krilin';
import {DarthVader} from '../../src/ejercicio-1/StarWars/DarthVader';
import {Skywalker} from '../../src/ejercicio-1/StarWars/Skywalker';

describe('Pruebas clase Combat', () => {
  let charmander: Charmander;
  let pikachu: Pikachu;
  let superman: Superman;
  let batman: Batman;
  let goku: Goku;
  let krilin: Krilin;
  let spiderman: Spiderman;
  let hulk: Hulk;
  let darthVader: DarthVader;
  let skywalker: Skywalker;
  let combate1: Combat;
  let combate2: Combat;
  let combate3: Combat;
  let combate4: Combat;
  let combate5: Combat;
  let combate6: Combat;
  let combate7: Combat;
  let combate8: Combat;
  let combate9: Combat;
  let combate10: Combat;
  let combate11: Combat;
  before(function() { // #3
    charmander = new Charmander;
    pikachu = new Pikachu;
    superman = new Superman;
    batman = new Batman;
    goku = new Goku;
    krilin = new Krilin;
    spiderman = new Spiderman;
    hulk = new Hulk;
    darthVader = new DarthVader;
    skywalker = new Skywalker;
    combate1 = new Combat(charmander, pikachu);
    combate2 = new Combat(batman, goku); //
    combate3 = new Combat(skywalker, krilin);
    combate4 = new Combat(superman, hulk);
    combate5 = new Combat(darthVader, spiderman);
    combate6 = new Combat(pikachu, hulk);
    combate7 = new Combat(darthVader, batman);
    combate8 = new Combat(goku, charmander);
    combate9 = new Combat(pikachu, batman);
    combate10 = new Combat(charmander, skywalker);
    combate11 = new Combat(goku, spiderman);
  });
  beforeEach(function() {
    charmander.restoreHP();
    pikachu.restoreHP();
    spiderman.restoreHP();
    hulk.restoreHP();
    batman.restoreHP();
    superman.restoreHP();
    goku.restoreHP();
    krilin.restoreHP();
    darthVader.restoreHP();
    skywalker.restoreHP();
  });
  it('new Combat(charmander, pikachu) is not equal to null', () => {
    expect(new Combat(charmander, pikachu)).not.to.be.equal(null);
  });
  it('combate1.getPokemon1() returns charmander', () => {
    expect(combate1.getFighter1()).to.be.equal(charmander);
  });
  it('combate1.getPokemon2() returns squirtle', () => {
    expect(combate1.getFighter2()).to.be.equal(pikachu);
  });
  it('In combate1 charmander wins (combate1.start())', () => {
    combate1.start();
    expect(pikachu.getHP()).to.be.lessThanOrEqual(0);
    expect(charmander.getHP()).to.be.greaterThan(0);
  });
  it('In combate2 batman wins (combate2.start())', () => {
    combate2.start();
    expect(goku.getHP()).to.be.lessThanOrEqual(0);
    expect(batman.getHP()).to.be.greaterThan(0);
  });
  it('In combate3 skywalker wins (combate2.start())', () => {
    combate3.start();
    expect(krilin.getHP()).to.be.lessThanOrEqual(0);
    expect(skywalker.getHP()).to.be.greaterThan(0);
  });
  it('In combate4 hulk wins (combate2.start())', () => {
    combate4.start();
    expect(superman.getHP()).to.be.lessThanOrEqual(0);
    expect(hulk.getHP()).to.be.greaterThan(0);
  });
  it('In combate5 spiderman wins (combate2.start())', () => {
    combate5.start();
    expect(darthVader.getHP()).to.be.lessThanOrEqual(0);
    expect(spiderman.getHP()).to.be.greaterThan(0);
  });
  it('In combate6 pikachu wins (combate2.start())', () => {
    combate6.start();
    expect(hulk.getHP()).to.be.lessThanOrEqual(0);
    expect(pikachu.getHP()).to.be.greaterThan(0);
  });
  it('In combate7 batman wins (combate2.start())', () => {
    combate7.start();
    expect(darthVader.getHP()).to.be.lessThanOrEqual(0);
    expect(batman.getHP()).to.be.greaterThan(0);
  });
  it('In combate8 goku wins (combate2.start())', () => {
    combate8.start();
    expect(charmander.getHP()).to.be.lessThanOrEqual(0);
    expect(goku.getHP()).to.be.greaterThan(0);
  });
  it('In combate9 batman wins (combate2.start())', () => {
    combate9.start();
    expect(pikachu.getHP()).to.be.lessThanOrEqual(0);
    expect(batman.getHP()).to.be.greaterThan(0);
  });
  it('In combate10 skywalker wins (combate2.start())', () => {
    combate10.start();
    expect(charmander.getHP()).to.be.lessThanOrEqual(0);
    expect(skywalker.getHP()).to.be.greaterThan(0);
  });
  it('In combate11 goku wins (combate2.start())', () => {
    combate11.start();
    expect(spiderman.getHP()).to.be.lessThanOrEqual(0);
    expect(goku.getHP()).to.be.greaterThan(0);
  });
});


