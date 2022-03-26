import 'mocha';
import {expect} from 'chai';
import {SeriesStreamableCollection} from '../../src/ejercicio-2/SeriesStreamableCollection';
import {Series} from '../../src/ejercicio-2/Series';

describe('Pruebas clase SeriesStreamableCollection', () => {
  let lost: Series;
  let got: Series;
  let vikings: Series;
  let netflix: SeriesStreamableCollection;
  before(function() {
    lost = new Series('Lost', 2004, 'J. J. Abrams', 'Drama', 121);
    got = new Series('Game of Thrones', 2011, 'David Benioff', 'Medieval fantasy', 73);
    vikings = new Series('Vikings', 2013, 'Michael HIrst', 'Historical fiction', 89);
    netflix = new SeriesStreamableCollection([lost, got]);
  });
  it('new SeriesStreamableCollection([lost, got]) is not equal null', () => {
    expect(new SeriesStreamableCollection([lost, got])).not.to.be.equal(null);
  });
  it('netflix.getCollectionType() returns \'Series\'', () => {
    expect(netflix.getCollectionType()).to.be.equal('Series');
  });
  it('netflix.searchByName(\'Lost\') returns [lost]', () => {
    expect(netflix.searchByName('Lost')).to.be.eql([lost]);
  });
  it('netflix.searchByYear(2011) returns [got]', () => {
    expect(netflix.searchByYear(2011)).to.be.eql([got]);
  });
  it('netflix.searchByDirector(\'David Benioff\') returns [got]', () => {
    expect(netflix.searchByDirector('David Benioff')).to.be.eql([got]);
  });
  it('netflix.addElement(vikings) adds vikings to the collection', () => {
    netflix.addElement(vikings);
    expect(netflix.searchByName('Vikings')).to.be.eql([vikings]);
  });
  it('netflix.deleteElement(1) removes vikings from the collection', () => {
    netflix.deleteElement(1);
    expect(netflix.searchByName('Game of thrones')).to.be.eql([]);
  });
});