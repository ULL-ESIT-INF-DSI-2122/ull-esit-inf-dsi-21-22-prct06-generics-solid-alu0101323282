import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../../src/mod/NumericPrintableCollection';

describe('Pruebas clase NumericPrintableCollection', () => {
  let num: NumericPrintableCollection;
  before(function() { // #3
    num = new NumericPrintableCollection([12, 345, 8]);
  });
  it('new NumericPrintableCollection([7, 45, 23, 108]) is not equal to null', () => {
    expect(new NumericPrintableCollection([7, 45, 23, 108])).not.to.be.equal(null);
  });
  it('num.getItem(num.getNumberOfItems()-1) returns 15', () => {
    num.addItem(15);
    expect(num.getItem(num.getNumberOfItems()-1)).to.be.equal(15);
  });
  it('num.removeItem(num.getNumberOfItems()-1) removes the number 15', () => {
    num.removeItem(num.getNumberOfItems()-1);
    expect(num.getItem(num.getNumberOfItems()-1)).not.to.be.equal(15);
  });
  it('num.print() returns the string \'12, 345, 8\'', () => {
    expect(num.print()).to.be.equal('12, 345, 8');
  });
});