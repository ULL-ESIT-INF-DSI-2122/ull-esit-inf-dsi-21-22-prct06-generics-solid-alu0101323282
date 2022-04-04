import {Strategy} from '../Strategy';

/**
 * Class with the Mergesort algorithm.
 */
export class Mergesort implements Strategy {
  /**
   * Executes the Mergesort algorithm.
   * @param array Input array.
   * @returns Returns the input array sorted.
   */
  execute(array: number[]): number[] {
    const half: number = array.length / 2;
    if (array.length < 2) {
      return array;
    }
    const left: number[] = array.splice(0, half);
    return this.merge(this.execute(left), this.execute(array));
  }

  /**
   * Auxiliar method for the Mergesort algorithm.
   * @param left Input array's left half.
   * @param right Input array's rigth half.
   * @returns Returns the two halves merged.
   */
  private merge(left: number[], right: number[]): number[] {
    let arr: number[] = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift() as number);
      } else {
        arr.push(right.shift() as number);
      }
    }
    return [...arr, ...left, ...right];
  }
}


