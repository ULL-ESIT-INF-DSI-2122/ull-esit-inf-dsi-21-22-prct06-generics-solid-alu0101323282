
/**
 * Class to represent a film.
 */
export class Film {
  /**
   * Constructor for the class `Film`.
   * @param name Name.
   * @param year Year.
   * @param director Director.
   * @param genre Film genre.
   * @param duration Duration.
   */
  constructor(private readonly name: string, private readonly year: number,
                private readonly director: string, private readonly genre: string,
                private readonly duration: number) {
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
   * Getter for the propiety `duration`.
   * @returns Returns `duration`.
   */
  getDuration() {
    return this.duration;
  }
}