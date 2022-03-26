import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Documentary} from './Documentary';
import {CollectionType} from './Streamable';

/**
 * Class to represent a streamable collection of documentaries.
 */
export class DocumentaryStreamableCollection extends BasicStreamableCollection<Documentary> {
  /**
   * Collection type.
   */
  public readonly collectionType: CollectionType;
  /**
   * Constructor for the class `DocumentaryStreamableCollection`.
   * @param documentaryCollection Documentary collection.
   */
  constructor(documentaryCollection: Documentary[]) {
    super(documentaryCollection);
    this.collectionType = 'Documentary';
  }
}