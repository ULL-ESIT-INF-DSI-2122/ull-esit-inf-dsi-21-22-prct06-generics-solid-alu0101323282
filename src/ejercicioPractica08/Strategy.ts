
/**
 * Interface for the sort strategies.
 */
export interface Strategy {
    execute(data: number[]): number[];
}