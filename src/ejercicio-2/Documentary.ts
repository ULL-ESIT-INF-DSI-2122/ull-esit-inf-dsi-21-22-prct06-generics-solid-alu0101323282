
/**
 * Class to represent a documentary.
 */
export class Documentary {
  /**
   * Constructor for the class `Documentary`.
   * @param name Name.
   * @param year Year.
   * @param director Director.
   * @param type Documentary type.
   * @param duration Duration.
   */
  constructor(private readonly name: string, private readonly year: number,
                private readonly director: string, private readonly type: string,
                private readonly duration: number) {
  }
  /**
   * Getter for the propiety `name`.
   * @returns Returns `name`.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Getter for the propiety `year`.
   * @returns Returns `year`.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Getter for the propiety `director`.
   * @returns Returns `director`.
   */
  getDirector(): string {
    return this.director;
  }
  /**
   * Getter for the propiety `type`.
   * @returns Returns `type`.
   */
  getType(): string {
    return this.type;
  }
  /**
   * Getter for the propiety `duration`.
   * @returns Returns `duration`.
   */
  getDuration(): number {
    return this.duration;
  }
}