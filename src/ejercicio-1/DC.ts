import {Fighter, UniverseType} from './Fighter';


/**
 * Class to represent DC Universe figthers.
 */
export abstract class DC extends Fighter {
  protected abstract readonly realName: string;
  protected readonly universe: UniverseType = 'DC';
  constructor() {
    super();
  }
  getRealName() {
    return this.realName;
  }
}