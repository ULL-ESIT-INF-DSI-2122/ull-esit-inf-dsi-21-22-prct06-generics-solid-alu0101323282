import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../../src/ejercicioPractica07/PrimeNumber';

describe('Pruebas clase PrimeNumber', () => {
  let primes: PrimeNumber;
  before(function() { // #3
    primes = PrimeNumber.getPrimeNumberInstance();
  });
  it('PrimeNumber.getPrimeNumberInstance() returns an instance of PrimeNumber', () => {
    expect(PrimeNumber.getPrimeNumberInstance()).not.to.be.equal(null);
  });
  it('PrimeNumber.getPrimeNumberInstance() always returns the unic instance of PrimeNumber', () => {
    let primeNumbers: PrimeNumber = PrimeNumber.getPrimeNumberInstance();
    let secondPrimeNumbers: PrimeNumber = PrimeNumber.getPrimeNumberInstance();
    expect(primeNumbers).to.be.equal(secondPrimeNumbers);
  });
  it('primes.getFirstNPrimes(5) returns the array [2, 3, 5, 7, 11]', () => {
    expect(primes.getFirstNPrimes(5)).to.be.eql([2, 3, 5, 7, 11]);
  });
  it('primes.getPrimesBetween(10, 20) returns the array [11, 13, 17, 19]', () => {
    expect(primes.getPrimesBetween(10, 20)).to.be.eql([11, 13, 17, 19]);
  });
  it('[Symbol.iterator] allows to iterate the PrimeNumbers Set', () => {
    let testIterator: number[] = [];
    [...primes].forEach((number) => {
      testIterator.push(number);
    });
    expect(testIterator).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});