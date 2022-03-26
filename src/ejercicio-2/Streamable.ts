/**
 * Personalized type for streamable collection types.
 */
export type CollectionType = 'Series' | 'Film' | 'Documentary';

/**
 * Generic interface for streamable collections.
 */
export interface Streamable<T> {
    /**
     * Collection.
     */
    collection: T[];
    /**
     * Collection type.
     */
    collectionType: CollectionType;
    /**
     * Getter for the propiety `clave`.
     */
    getCollectionType(): CollectionType;
    /**
     * Searchs a collection element by name.
     * @param name Name.
     */
    searchByName(name: string): T[]|undefined;
    /**
     * Searchs a collection element by year.
     * @param year Year.
     */
    searchByYear(year: number): T[]|undefined;
    /**
     * Searchs a collection element by director.
     * @param director Director.
     */
    searchByDirector(director: string): T[]|undefined;
    /**
     * Adds an element to the collection.
     * @param element Element to add.
     */
    addElement(element: T): void;
    /**
     * Deletes an element from the collection.
     * @param element Element to delete.
     */
    deleteElement(index: number): void;
}