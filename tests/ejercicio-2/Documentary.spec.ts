import 'mocha';
import {expect} from 'chai';
import {Documentary} from '../../src/ejercicio-2/Documentary';

describe('Pruebas clase Documentary', () => {
  let octopus: Documentary;
  before(function() {
    octopus = new Documentary('My Octopus Teacher', 2020, 'James Reed', 'Animals', 85);
  });
  it('new Documentary(\'My Octopus Teacher\', 2020, \'James Reed\', \'Animals\', 85) is not equal null', () => {
    expect(new Documentary('My Octopus Teacher', 2020, 'James Reed', 'Animals', 85)).not.to.be.equal(null);
  });
  it('octopus.getName() returns \'My Octopus Teacher\'', () => {
    expect(octopus.getName()).to.be.equal('My Octopus Teacher');
  });
  it('octopus.getYear() returns 2020', () => {
    expect(octopus.getYear()).to.be.equal(2020);
  });
  it('octopus.getDirector() returns \'James Reed\'', () => {
    expect(octopus.getDirector()).to.be.equal('James Reed');
  });
  it('octopus.getType() returns \'Animals\'', () => {
    expect(octopus.getType()).to.be.equal('Animals');
  });
  it('octopus.getDuration() returns 85', () => {
    expect(octopus.getDuration()).to.be.equal(85);
  });
});