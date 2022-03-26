import 'mocha';
import {expect} from 'chai';
import {Skywalker} from '../../src/ejercicio-1/StarWars/Skywalker';

describe('Pruebas clase StarWars', () => {
  let skywalker: Skywalker;
  before(function() {
    skywalker = new Skywalker;
  });
  it('skywalker.getRace() returns \'green\'', () => {
    expect(skywalker.getLightsaberColor()).to.be.equal('green');
  });
});