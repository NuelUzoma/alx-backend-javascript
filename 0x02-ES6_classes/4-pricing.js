import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = null;

    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
