
/**
 * Iterable class to represent prime numbers.
 */
export class PrimeNumber implements Iterable<number> {
  /**
   * Set of prime numbers.
   */
  private primes: Set<number>;
  /**
   * PrimeNumber unic instance.
   */
  private static primeNumberInstance: PrimeNumber;
  /**
   * Constructor for the class PrimeNumber.
   * @param primeNumbers Initial prime numbers array.
   */
  private constructor(primeNumbers: number[] = []) {
    this.primes = new Set(primeNumbers);
  }
  /**
   * Gets the unic PrimeNumber instance.
   * @returns Returns the unic PrimeNumber instance.
   */
  public static getPrimeNumberInstance(): PrimeNumber {
    if (!PrimeNumber.primeNumberInstance) {
      PrimeNumber.primeNumberInstance = new PrimeNumber();
    }
    return PrimeNumber.primeNumberInstance;
  }
  /**
   * Gets the first n prime numbers.
   * @param n Number of prime numbers to get.
   * @returns Returns an array with the first n prime numbers.
   */
  getFirstNPrimes(n: number): number[] {
    let count: number = 0;
    let primes: number[] = [];
    for (let i: number = 2; count != n; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
        count++;
      }
    }
    primes.forEach((prime) => {
      PrimeNumber.primeNumberInstance.primes.add(prime);
    });
    return primes;
  }

  /**
   * Gets the prime numbers between n and m, these included.
   * @param n First number to look for prime numbers.
   * @param m Last number to look for prime numbers.
   * @returns Returns an array with the prime numbers between n and m, these included.
   */
  getPrimesBetween(n: number, m: number): number[] {
    let primes: number[] = [];
    for (let i: number = n; i <= m; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    primes.forEach((prime) => {
      PrimeNumber.primeNumberInstance.primes.add(prime);
    });
    return primes;
  }

  /**
   * Allows to iterate `primes`.
   * @returns Returns an Iterator.
   */
  [Symbol.iterator](): Iterator<number> {
    return PrimeNumber.primeNumberInstance.primes.values();
  }

  /**
   * Checks if a number is prime.
   * @param n Number to evaluate.
   * @returns Returns true if `n` is a prime number.
   */
  private isPrime(n: number): boolean {
    for (let i: number = 2; i*i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}