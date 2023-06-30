export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for Code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof code === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter and Setter for Name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
