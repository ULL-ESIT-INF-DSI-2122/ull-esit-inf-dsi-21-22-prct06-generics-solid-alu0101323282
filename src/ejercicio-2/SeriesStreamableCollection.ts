import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Series} from './Series';
import {CollectionType} from './Streamable';

/**
 * Class to represent a streamable collection of documentaries.
 */
export class SeriesStreamableCollection extends BasicStreamableCollection<Series> {
  /**
   * Collection type.
   */
  public readonly collectionType: CollectionType;
  /**
   * Constructor for the class `SeriesStreamableCollection`.
   * @param seriesCollection Series collection.
   */
  constructor(seriesCollection: Series[]) {
    super(seriesCollection);
    this.collectionType = 'Series';
  }
}