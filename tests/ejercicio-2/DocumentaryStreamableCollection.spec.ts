import 'mocha';
import {expect} from 'chai';
import {DocumentaryStreamableCollection} from '../../src/ejercicio-2/DocumentaryStreamableCollection';
import {Documentary} from '../../src/ejercicio-2/Documentary';

describe('Pruebas clase DocumentaryStreamableCollection', () => {
  let octopus: Documentary;
  let freeSolo: Documentary;
  let ww2: Documentary;
  let disneyPlus: DocumentaryStreamableCollection;
  before(function() {
    octopus = new Documentary('My Octopus Teacher', 2020, 'James Reed', 'Animals', 85);
    freeSolo = new Documentary('Free Solo', 2018, 'Jimmy Chin', 'Sports', 100);
    ww2 = new Documentary('World War II in colour', 2009, 'Jonathan Martin', 'History', 75);
    disneyPlus = new DocumentaryStreamableCollection([octopus, freeSolo]);
  });
  it('new DocumentaryStreamableCollection([octopus, freeSolo]) is not equal null', () => {
    expect( new DocumentaryStreamableCollection([octopus, freeSolo])).not.to.be.equal(null);
  });
  it('disneyPlus.getCollectionType() returns \'Documentary\'', () => {
    expect(disneyPlus.getCollectionType()).to.be.equal('Documentary');
  });
  it('disneyPlus.searchByName(\'Free Solo\') returns [freeSolo]', () => {
    expect(disneyPlus.searchByName('Free Solo')).to.be.eql([freeSolo]);
  });
  it('disneyPlus.searchByYear(2020) returns [octopus]', () => {
    expect(disneyPlus.searchByYear(2020)).to.be.eql([octopus]);
  });
  it('disneyPlus.searchByDirector(\'James Reed\') returns [octopus]', () => {
    expect(disneyPlus.searchByDirector('James Reed')).to.be.eql([octopus]);
  });
  it('disneyPlus.addElement(ww2) adds avatar to the collection', () => {
    disneyPlus.addElement(ww2);
    expect(disneyPlus.searchByName('World War II in colour')).to.be.eql([ww2]);
  });
  it('disneyPlus.deleteElement(1) removes freeSolo from the collection', () => {
    disneyPlus.deleteElement(1);
    expect(disneyPlus.searchByName('Free Solo')).to.be.eql([]);
  });
});