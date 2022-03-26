import {Documentary} from './Documentary';
import {Film} from './Film';
import {Series} from './Series';
import {CollectionType, Streamable} from './Streamable';

/**
 * Generic abstract class for basic streamable collection.
 */
export abstract class BasicStreamableCollection<T extends Series | Film | Documentary> implements Streamable<T> {
  /**
   * Collection type.
   */
  abstract collectionType: CollectionType;
  /**
   * Constructor for the class `BasicStreamableCollection`.
   * @param collection Basic streamable collection.
   */
  constructor(public readonly collection: T[]) {
  }
  /**
   * Getter for the propiety `collection`.
   * @returns Returns `collection`.
   */
  getCollection(): T[] {
    return this.collection;
  }
  /**
   * Getter for the propiety `collectionType`.
   * @returns Returns `collectionType`.
   */
  getCollectionType(): CollectionType {
    return this.collectionType;
  }
  /**
   * Searchs a collection element by name.
   * @param name Name.
   * @returns Returns an array of the elements with the name `name`.
   */
  searchByName(name: string): T[] {
    return this.collection.filter((f: T) => f.getName() === name);
  }
  /**
   * Searchs a collection element by year.
   * @param year Year.
   * @returns Returns an array of the elements with the year `year`.
   */
  searchByYear(year: number): T[] {
    return this.collection.filter((f: T) => f.getYear() === year);
  }
  /**
   * Searchs a collection element by director.
   * @param director Director.
   * @returns Returns an array of the elements with the director `director`.
   */
  searchByDirector(director: string): T[] {
    return this.collection.filter((f: T) => f.getDirector() === director);
  }
  /**
   * Adds an element to the collection.
   * @param element Element to add.
   */
  addElement(element: T): void {
    this.collection.push(element);
  }
  /**
   * Deletes an element from the collection.
   * @param element Element to delete.
   */
  deleteElement(index: number): void {
    this.collection.splice(index, 1);
  }
}