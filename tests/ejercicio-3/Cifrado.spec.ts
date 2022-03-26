import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../../src/ejercicio-3/Cifrado';

describe('Pruebas clase Cifrado', () => {
  let cesar: Cifrado;
  before(function() {
    cesar = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'clave');
  });
  it('new Cifrado(\'abcdefghijklmnopqrstuvwxyz\', \'clave\') is not equal null', () => {
    expect(new Cifrado('abcdefghijklmnopqrstuvwxyz', 'clave')).not.to.be.equal(null);
  });
  it('cesar.getAlfabeto() returns \'abcdefghijklmnopqrstuvwxyz\'', () => {
    expect(cesar.getAlfabeto()).to.be.equal('abcdefghijklmnopqrstuvwxyz');
  });
  it('cesar.getClave() returns \'clave\'', () => {
    expect(cesar.getClave()).to.be.equal('clave');
  });
  it('cesar.setAlfabeto(\'acegijlmnorsv\') sets alfabeto to \'acegijlmnorsv\'', () => {
    cesar.setAlfabeto('acegijlmnorsv');
    expect(cesar.getAlfabeto()).to.be.equal('acegijlmnorsv');
  });
  it('cesar.setAlfabeto(\'abc\') don\'t change alfabet value', () => {
    cesar.setAlfabeto('abc');
    expect(cesar.getAlfabeto()).to.be.equal('acegijlmnorsv');
  });
  it('cesar.setClave(\'acelga\') returns \'acelga\'', () => {
    cesar.setClave('acelga');
    expect(cesar.getClave()).to.be.equal('acelga');
  });
  it('cesar.setAlfabeto(\'password\') don\'t change clave value', () => {
    cesar.setClave('password');
    expect(cesar.getClave()).to.be.equal('acelga');
  });
  it('cesar.codificar(\'MorsaRosa\') returns nsajisrag', () => {
    expect(cesar.codificar('MorsaRosa')).to.be.equal('nsajisrag');
  });
  it('cesar.codificar(\'MorsaAzul\') returns undefined', () => {
    expect(cesar.codificar('MorsaAzul')).to.be.equal(undefined);
  });
  it('cesar.decodificar(\'nsajisrag\') returns MorsaRosa', () => {
    expect(cesar.decodificar('nsajisrag')).to.be.equal('morsarosa');
  });
  it('cesar.decodificar(\'efsdvfw\') returns undefined', () => {
    expect(cesar.decodificar('efsdvfw')).to.be.equal(undefined);
  });
});