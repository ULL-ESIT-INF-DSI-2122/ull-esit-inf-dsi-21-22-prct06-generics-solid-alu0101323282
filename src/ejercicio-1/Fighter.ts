
export abstract class Fighter {
  protected abstract hp: number;
  protected abstract readonly name: string;
  protected abstract readonly height: number;
  protected abstract readonly weigth: number;
  protected abstract readonly attack: number;
  protected abstract readonly defense: number;
  protected abstract readonly speed: number;
  protected abstract readonly maxHp: number;
  protected abstract readonly phrase: string;
  getName() {
    return this.name;
  }
  getWeigth() {
    return this.weigth;
  }
  getHeight() {
    return this.height;
  }
  getAttack() {
    return this.attack;
  }
  getDefense() {
    return this.defense;
  }
  getSpeed() {
    return this.speed;
  }
  getMaxHP() {
    return this.maxHp;
  }
  getHP() {
    return this.hp;
  }
  setHP(health: number) {
    this.hp = health;
  }
  restoreHP() {
    this.hp = this.maxHp;
  }
  getPhrase() {
    return this.phrase;
  }
  sayPhrase() {
    console.log(`${this.name}: "${this.phrase}"`);
  }
}