import 'mocha';
import {expect} from 'chai';
import {StringPrintableCollection} from '../../src/mod/StringPrintableCollection';

describe('Pruebas clase StringPrintableCollection', () => {
  let str: StringPrintableCollection;
  before(function() { // #3
    str = new StringPrintableCollection(['sol', 'hola', 'pan']);
  });
  it('new StringPrintableCollection([\'do\', \'re\', \'mi\']) is not equal to null', () => {
    expect(new StringPrintableCollection(['do', 're', 'mi'])).not.to.be.equal(null);
  });
  it('str.getItem(num.getNumberOfItems()-1) returns \'adiós\'', () => {
    str.addItem('adiós');
    expect(str.getItem(str.getNumberOfItems()-1)).to.be.equal('adiós');
  });
  it('str.removeItem(num.getNumberOfItems()-1) removes the string \'adiós\'', () => {
    str.removeItem(str.getNumberOfItems()-1);
    expect(str.getItem(str.getNumberOfItems()-1)).not.to.be.equal('adiós');
  });
  it('str.print() returns the string \'sol, hola, pan\'', () => {
    expect(str.print()).to.be.equal('sol, hola, pan');
  });
});