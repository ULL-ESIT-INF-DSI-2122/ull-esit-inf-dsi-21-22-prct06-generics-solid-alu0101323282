import 'mocha';
import {expect} from 'chai';
import {Batman} from '../../src/ejercicio-1/DC/Batman';

describe('Pruebas clase DC', () => {
  let batman: Batman;
  before(function() {
    batman = new Batman;
  });
  it('batman.getRealName() returns \'Bruce Wayne\'', () => {
    expect(batman.getRealName()).to.be.equal('Bruce Wayne');
  });
});