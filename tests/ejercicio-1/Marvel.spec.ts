import 'mocha';
import {expect} from 'chai';
import {Spiderman} from '../../src/ejercicio-1/Marvel/Spiderman';

describe('Pruebas clase Marvel', () => {
  let spiderman: Spiderman;
  before(function() {
    spiderman = new Spiderman;
  });
  it('spiderman.getPower() returns \'Arachnid\'', () => {
    expect(spiderman.getPower()).to.be.equal('Arachnid');
  });
});