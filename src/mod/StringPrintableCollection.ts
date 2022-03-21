import {PrintableCollection} from './PrintableCollection';

/**
 * Class to represent string printable collections.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(private stringCollection: string[]) {
    super(stringCollection);
  }
  /**
   * Concatenates the strings of `stringCollection` with `, `.
   * @returns Returns a string with the strings concatenated with `, `.
   */
  print(): string {
    let stringConcatenation: string = '';
    this.stringCollection.forEach((s, index) => {
      stringConcatenation += s;
      if (index < this.stringCollection.length - 1) {
        stringConcatenation += ', ';
      }
    });
    return stringConcatenation;
  }
}