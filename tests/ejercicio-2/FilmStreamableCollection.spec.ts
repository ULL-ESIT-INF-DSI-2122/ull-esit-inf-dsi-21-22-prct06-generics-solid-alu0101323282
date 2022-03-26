import 'mocha';
import {expect} from 'chai';
import {FilmStreamableCollection} from '../../src/ejercicio-2/FilmStreamableCollection';
import {Film} from '../../src/ejercicio-2/Film';

describe('Pruebas clase FilmStreamableCollection', () => {
  let titanic: Film;
  let godfather: Film;
  let avatar: Film;
  let hbo: FilmStreamableCollection;
  before(function() {
    godfather = new Film('The Godfather', 1972, 'Francis Ford Coppola', 'Criminal', 175);
    titanic = new Film('Titanic', 1997, 'James Cameron', 'Romantic-Drama', 195);
    avatar = new Film('Avatar', 2009, 'James Cameron', 'Science fiction', 162);
    hbo = new FilmStreamableCollection([titanic, godfather]);
  });
  it('new FilmStreamableCollection([titanic, godfather]) is not equal null', () => {
    expect(new FilmStreamableCollection([titanic, godfather])).not.to.be.equal(null);
  });
  it('hbo.getCollectionType() returns \'Film\'', () => {
    expect(hbo.getCollectionType()).to.be.equal('Film');
  });
  it('hbo.searchByName(\'Titanic\') returns [titanic]', () => {
    expect(hbo.searchByName('Titanic')).to.be.eql([titanic]);
  });
  it('hbo.searchByYear(1972) returns [godfather]', () => {
    expect(hbo.searchByYear(1972)).to.be.eql([godfather]);
  });
  it('hbo.searchByDirector(\'James Cameron\') returns [titanic]', () => {
    expect(hbo.searchByDirector('James Cameron')).to.be.eql([titanic]);
  });
  it('hbo.addElement(avatar) adds avatar to the collection', () => {
    hbo.addElement(avatar);
    expect(hbo.searchByName('Avatar')).to.be.eql([avatar]);
  });
  it('hbo.deleteElement(1) removes godfather from the collection', () => {
    hbo.deleteElement(1);
    expect(hbo.searchByName('The Godfather')).to.be.eql([]);
  });
});