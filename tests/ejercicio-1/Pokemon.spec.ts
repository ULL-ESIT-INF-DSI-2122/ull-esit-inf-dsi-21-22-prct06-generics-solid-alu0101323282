import 'mocha';
import {expect} from 'chai';
import {Charmander} from '../../src/ejercicio-1/Pokemon/Charmander';
import {Pokemon} from '../../src/ejercicio-1/Pokemon';

describe('Pruebas clase Pokemon', () => {
  let charmander: Pokemon;
  before(function() {
    charmander = new Charmander;
  });
  it('charmander.getType() returns \'fire\'', () => {
    expect(charmander.getType()).to.be.equal('fire');
  });
});