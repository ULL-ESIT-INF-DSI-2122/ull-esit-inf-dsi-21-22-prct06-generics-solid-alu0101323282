import 'mocha';
import {expect} from 'chai';
import {Goku} from '../../src/ejercicio-1/DragonBall/Goku';

describe('Pruebas clase DragonBall', () => {
  let goku: Goku;
  before(function() {
    goku = new Goku;
  });
  it('goku.getRace() returns \'Sayayin\'', () => {
    expect(goku.getRace()).to.be.equal('Sayayin');
  });
});