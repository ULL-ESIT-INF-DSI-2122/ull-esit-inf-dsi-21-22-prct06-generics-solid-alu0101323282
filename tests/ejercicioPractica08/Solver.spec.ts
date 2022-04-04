import 'mocha';
import {expect} from 'chai';
import {Solver} from '../../src/ejercicioPractica08/Solver';
import {Bubblesort} from '../../src/ejercicioPractica08/Strategies/Bubblesort';
import {Mergesort} from '../../src/ejercicioPractica08/Strategies/Mergesort';

describe('Pruebas clase Solver', () => {
  let s: Solver;
  let b: Bubblesort;
  let m: Mergesort;
  before(function() {
    b = new Bubblesort;
    m = new Mergesort;
    s = new Solver([7, 4, 2], b);
  });
  it('new Solver([7, 4, 2], b) is not equal null', () => {
    expect(new Solver([7, 4, 2], b)).not.to.be.equal(null);
  });
  it('s.logic() returns the array [2, 4, 7] sorted with Bubblesort', () => {
    expect(s.logic()).to.be.eql([2, 4, 7]);
  });
  it('s.getStrategy() returns b', () => {
    expect(s.getStrategy()).to.be.equal(b);
  });
  it('s.setStrategy(m) sets strategy to m', () => {
    s.setStrategy(m);
    expect(s.getStrategy()).to.be.equal(m);
  });
  it('s.logic() returns the array [2, 4, 7] sorted with MergeSort', () => {
    expect(s.logic()).to.be.eql([2, 4, 7]);
  });
});