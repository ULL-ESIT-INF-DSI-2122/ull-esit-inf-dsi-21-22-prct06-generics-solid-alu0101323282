import {PrintableCollection} from './PrintableCollection';

/**
 * Class to represent numeric printable collections.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(private numberCollection: number[]) {
    super(numberCollection);
  }
  /**
   * Concatenates the numbers of `numberCollection` with `, `.
   * @returns Returns a string with the numbers concatenated with `, `.
   */
  print(): string {
    let stringRepresentation: string = '';
    this.numberCollection.forEach((d, index) => {
      stringRepresentation += d;
      if (index < this.numberCollection.length - 1) {
        stringRepresentation += ', ';
      }
    });
    return stringRepresentation;
  }
}