
/**
 * Class to represent a series.
 */
export class Series {
  /**
   * Constructor for the class `Series`.
   * @param name Name.
   * @param year Year.
   * @param director Director.
   * @param genre Series genre.
   * @param numberOfEpisodes Number of episodes.
   */
  constructor(private readonly name: string, private readonly year: number,
              private readonly director: string, private readonly genre: string,
              private readonly numberOfEpisodes: number) {
  }
  /**
   * Getter for the propiety `name`.
   * @returns Returns `name`.
   */
  getName() {
    return this.name;
  }
  /**
   * Getter for the propiety `year`.
   * @returns Returns `year`.
   */
  getYear() {
    return this.year;
  }
  /**
   * Getter for the propiety `director`.
   * @returns Returns `director`.
   */
  getDirector() {
    return this.director;
  }
  /**
   * Getter for the propiety `genre`.
   * @returns Returns `genre`.
   */
  getGenre() {
    return this.genre;
  }
  /**
   * Getter for the propiety `numberOfEpisodes`.
   * @returns Returns `numberOfEpisodes`.
   */
  getNumberOfEpisodes() {
    return this.numberOfEpisodes;
  }
}