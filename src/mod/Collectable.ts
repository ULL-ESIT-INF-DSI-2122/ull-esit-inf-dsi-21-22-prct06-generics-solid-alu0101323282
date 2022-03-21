/**
 * Generic interface for collectable objects.
 */
export interface Collectable<T> {
  /**
   * Adds an object.
   * @param newItem Item to add.
   */
  addItem(newItem: T): void;
  /**
   * Gets an object.
   * @param index Index of the object to get.
   */
  getItem(index: number): T;
  /**
   * Removes an object.
   * @param index Index of the object to remove.
   */
  removeItem(index: number): void;
  /**
   * Get the number of objects
   */
  getNumberOfItems(): number;
}