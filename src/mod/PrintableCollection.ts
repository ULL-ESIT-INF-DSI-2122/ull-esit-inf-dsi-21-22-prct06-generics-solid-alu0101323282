import {Collectable} from './Collectable';
import {Printable} from './Printable';

/**
 * Generic class for printable collections of objects.
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected collection: T[]) {}
  /**
   * Adds an object to `collection`.
   * @param newItem Item to add.
   */
  addItem(newItem: T) {
    this.collection.push(newItem);
  }
  /**
   * Gets an object from `collection`.
   * @param index Index of the object to get from `collection`.
   */
  getItem(index: number) {
    return this.collection[index];
  }
  /**
   * Removes an object from `collection`.
   * @param index Index of the object to remove from `collection`.
   */
  removeItem(index: number) {
    this.collection.splice(index, 1);
  }
  /**
   * Get the number of objects from `collection`.
   */
  getNumberOfItems() {
    return this.collection.length;
  }
  /**
   * Prints the object collection.
   */
  abstract print(): void;
}