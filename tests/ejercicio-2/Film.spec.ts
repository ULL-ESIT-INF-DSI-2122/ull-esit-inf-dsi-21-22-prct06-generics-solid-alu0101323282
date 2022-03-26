import 'mocha';
import {expect} from 'chai';
import {Film} from '../../src/ejercicio-2/Film';

describe('Pruebas clase Film', () => {
  let titanic: Film;
  before(function() {
    titanic = new Film('Titanic', 1997, 'James Cameron', 'Romantic-Drama', 195);
  });
  it('new Film(\'Titanic\', 1997, \'James Cameron\', \'Romantic-Drama\', 195) is not equal null', () => {
    expect(new Film('Titanic', 1997, 'James Cameron', 'Romantic-Drama', 195)).not.to.be.equal(null);
  });
  it('titanic.getName() returns \'Titanic\'', () => {
    expect(titanic.getName()).to.be.equal('Titanic');
  });
  it('titanic.getYear() returns 1997', () => {
    expect(titanic.getYear()).to.be.equal(1997);
  });
  it('titanic.getDirector() returns \'James Cameron\'', () => {
    expect(titanic.getDirector()).to.be.equal('James Cameron');
  });
  it('titanic.getGenre() returns \'Romantic-Drama\'', () => {
    expect(titanic.getGenre()).to.be.equal('Romantic-Drama');
  });
  it('titanic.getDuration() returns 195', () => {
    expect(titanic.getDuration()).to.be.equal(195);
  });
});