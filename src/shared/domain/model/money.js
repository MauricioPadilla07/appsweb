import {Currency} from "./currency.js";
import {ValidationError} from "./errors.js";

/**
    Value Object representing an amount of money with a currency.
    Immutable and supports basic operations like addition and multiplication.
 */

export class Money {
    #amount;
    #currency;

    /**
     * Creates a new Money instance
     * @param {Object}params         -   Parameters for creating Money
     * @param {number}params.amount     The amount of money(non-negative number)
     * @param {Currency}params.currency The currency og the money
     */

    constructor({amount, currency}) {
        if(!Number.isFinite(amount) || amount <0 )
            throw new ValidationError("Amount must be a positive integer");
        if(!(currency instanceof Currency))
            throw new ValidationError("Currency must be a valid Currency object");
        this.#amount=Number(amount.toFixed(2));
        this.#currency=currency;
    }

    get amount() {
        return this.#amount;
    }

    get currency() {
        return this.#currency;
    }

    add(other){
        if(!(other instanceof Money)|| !this.#currency.equals(other.currency))
            throw new ValidationError("Cannot add Money with different currencies");

    }

}