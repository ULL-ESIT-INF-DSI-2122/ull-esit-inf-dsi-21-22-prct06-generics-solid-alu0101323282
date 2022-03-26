import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/Fighter';
import {Charmander} from '../../src/ejercicio-1/Pokemon/Charmander';

describe('Pruebas clase Fighter', () => {
  let charmander: Fighter;
  before(function() { // #3
    charmander = new Charmander;
  });
  it('charmander.getWeigth() returns 7', () => {
    expect(charmander.getWeigth()).to.be.equal(7);
  });
  it('charmander.getHeight() returns 1', () => {
    expect(charmander.getHeight()).to.be.equal(1);
  });
  it('charmander.getSpeed() returns 64', () => {
    expect(charmander.getSpeed()).to.be.equal(64);
  });
  it('charmander.getMaxHP() returns 88', () => {
    expect(charmander.getMaxHP()).to.be.equal(88);
  });
  it('charmander.getPhrase() returns \'Char Char!!\'', () => {
    expect(charmander.getPhrase()).to.be.equal('Char Char!!');
  });
});