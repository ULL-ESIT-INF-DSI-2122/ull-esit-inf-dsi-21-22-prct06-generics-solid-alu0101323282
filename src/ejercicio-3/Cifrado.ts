
/**
 * Class to represent a shift-encryption algorithm.
 */
export class Cifrado {
  /**
   * Constructor for the class `Cifrado`.
   * @param alfabeto Alphabet.
   * @param clave Key.
   */
  constructor(private alfabeto: string, private clave: string) {}
  /**
   * Getter for the propiety `alfabeto`.
   * @returns Returns the propiety `alfabeto`.
   */
  getAlfabeto(): string {
    return this.alfabeto;
  }
  /**
   * Sets a new `alfabeto` if `clave` belongs to that new alphabet.
   * @param nuevoAlfabeto New value for `alfabeto`.
   */
  setAlfabeto(nuevoAlfabeto: string): void {
    let temp: string = this.alfabeto;
    this.alfabeto = nuevoAlfabeto;
    if (!this.perteneceAlAlfabeto(this.clave)) {
      this.alfabeto = temp;
    }
  }
  /**
   * Getter for the propiety `clave`.
   * @returns Returns the propiety `clave`.
   */
  getClave(): string {
    return this.clave;
  }
  /**
   * Sets a new `clave` if that new key belongs to the alphabet.
   * @param nuevaClave New value for `clave`.
   */
  setClave(nuevaClave: string): void {
    if (this.perteneceAlAlfabeto(nuevaClave)) {
      this.clave = nuevaClave;
    }
  }
  /**
   * Checks if a `string` belongs to the alphabet `alfabeto`.
   * @param str String to evaluate.
   * @returns Returns `true`if `str` belongs to the alphabet `alfabeto`.
   */
  perteneceAlAlfabeto(str: string): boolean {
    const caracteres: string[] = str.toLowerCase().split('');
    for (let i: number = 0; i < caracteres.length; i++) {
      if (this.alfabeto.toLowerCase().indexOf(caracteres[i]) === -1) return false;
    }
    return true;
  }

  /**
   * Encodes a message.
   * @param mensaje Message to encode.
   * @returns Returns the encoded message. If `mensaje` doesn't belong to `alfabeto`
   * it returns undefined.
   */
  codificar(mensaje: string): string | undefined {
    if (!this.perteneceAlAlfabeto(mensaje)) return undefined;
    let cifrado: string = '';
    let msgPos: number;
    let keyPos: number;
    for (let i: number = 0; i < mensaje.length; i++) {
      msgPos = this.alfabeto.toLowerCase().indexOf(mensaje[i].toLowerCase());
      keyPos = this.alfabeto.toLowerCase().indexOf(this.clave[i % this.clave.length].toLowerCase()) + 1;
      cifrado += this.alfabeto[(msgPos + keyPos) % this.alfabeto.length].toLowerCase();
    }
    return cifrado;
  }
  /**
   * Decodes a message.
   * @param mensaje Message to decode.
   * @returns Returns the decoded message. If `mensaje` doesn't belong to `alfabeto`
   * it returns undefined.
   */
  decodificar(mensaje: string): string | undefined {
    if (!this.perteneceAlAlfabeto(mensaje)) return undefined;
    let descifrado: string = '';
    let msgPos: number;
    let keyPos: number;
    let descifratedPos: number;
    for (let i: number = 0; i < mensaje.length; i++) {
      msgPos = this.alfabeto.indexOf(mensaje[i].toLowerCase());
      keyPos = this.alfabeto.indexOf(this.clave[i % this.clave.length].toLowerCase()) + 1;
      descifratedPos = msgPos - keyPos;
      if (descifratedPos < 0) descifratedPos += this.alfabeto.length;
      descifrado += this.alfabeto[descifratedPos].toLowerCase();
    }
    return descifrado;
  }
}