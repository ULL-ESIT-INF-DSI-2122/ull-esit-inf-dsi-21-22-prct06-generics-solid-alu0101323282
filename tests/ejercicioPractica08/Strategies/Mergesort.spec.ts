import 'mocha';
import {expect} from 'chai';
import {Mergesort} from '../../../src/ejercicioPractica08/Strategies/Mergesort';

describe('Pruebas clase Mergesort', () => {
  let m: Mergesort;
  before(function() {
    m = new Mergesort;
  });
  it('new Mergesort is not equal null', () => {
    expect(new Mergesort).not.to.be.equal(null);
  });
  it('m.execute([7, 4, 2]) returns the array [2, 4, 7]', () => {
    expect(m.execute([7, 4, 2])).to.be.eql([2, 4, 7]);
  });
});