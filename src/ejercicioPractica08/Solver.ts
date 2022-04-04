import {Strategy} from './Strategy';

/**
 * Class to sort arrays with diferent algorithms.
 */
export class Solver {
  /**
   * Constructor for the class Solver.
   * @param data Input array.
   * @param strategy Algorithm to sort the array.
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Setter for the attribute `startegy`.
   * @param strategy New `strategy` value.
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Getter for the attribute `startegy`.
   * @param strategy Returns `strategy`.
   */
  getStrategy() {
    return this.strategy;
  }

  /**
   * Delegetes the work to the strategy object.
   */
  logic() {
    const result = this.strategy.execute(this.data);
    console.log(result);
    return result;
  }
}
