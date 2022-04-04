import 'mocha';
import {expect} from 'chai';
import {Bubblesort} from '../../../src/ejercicioPractica08/Strategies/Bubblesort';

describe('Pruebas clase Bubblesort', () => {
  let b: Bubblesort;
  before(function() {
    b = new Bubblesort;
  });
  it('new Bubblesort is not equal null', () => {
    expect(new Bubblesort).not.to.be.equal(null);
  });
  it('b.execute([7, 4, 2]) returns the array [2, 4, 7]', () => {
    expect(b.execute([7, 4, 2])).to.be.eql([2, 4, 7]);
  });
});