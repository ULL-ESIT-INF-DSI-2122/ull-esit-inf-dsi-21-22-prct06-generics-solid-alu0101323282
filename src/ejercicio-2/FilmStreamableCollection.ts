import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Film} from './Film';
import {CollectionType} from './Streamable';

/**
 * Class to represent a streamable collection of films.
 */
export class FilmStreamableCollection extends BasicStreamableCollection<Film> {
  /**
   * Collection type.
   */
  public readonly collectionType: CollectionType;
  /**
   * Constructor for the class `FilmStreamableCollection`.
   * @param filmCollection Film collection.
   */
  constructor(filmCollection: Film[]) {
    super(filmCollection);
    this.collectionType = 'Film';
  }
}