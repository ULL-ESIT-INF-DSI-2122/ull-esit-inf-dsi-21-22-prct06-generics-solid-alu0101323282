import 'mocha';
import {expect} from 'chai';
import {Series} from '../../src/ejercicio-2/Series';

describe('Pruebas clase Series', () => {
  let lost: Series;
  before(function() {
    lost = new Series('Lost', 2004, 'J. J. Abrams', 'Drama', 121);
  });
  it('new Series(\'Lost\', 2004, \'J. J. Abrams\', \'Drama\', 121) is not equal null', () => {
    expect(new Series('Lost', 2004, 'J. J. Abrams', 'Drama', 121)).not.to.be.equal(null);
  });
  it('lost.getName() returns \'Lost\'', () => {
    expect(lost.getName()).to.be.equal('Lost');
  });
  it('lost.getYear() returns 2004', () => {
    expect(lost.getYear()).to.be.equal(2004);
  });
  it('lost.getDirector() returns \'J. J. Abrams\'', () => {
    expect(lost.getDirector()).to.be.equal('J. J. Abrams');
  });
  it('lost.getGenre() returns \'Drama\'', () => {
    expect(lost.getGenre()).to.be.equal('Drama');
  });
  it('lost.getNumberOfEpisodes() returns 121', () => {
    expect(lost.getNumberOfEpisodes()).to.be.equal(121);
  });
});