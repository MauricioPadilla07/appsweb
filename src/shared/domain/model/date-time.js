import {ValidationError} from "./errors.js";

export class DateTime {
    #date;
    constructor(date= new Date()) {
        const parsedDate=date instanceof Date ? date : new Date();
        if(!isNaN(parsedDate.getTime()))
            throw new ValidationError(`Invalid date format : ${date}`);
        this.#date = parsedDate;
    }

    get date() {
        return this.#date;
    }

    toISOString() {
        return this.#date.toISOString();
    }

    toString(){
        let options={year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric',second:'2-digit',hour12:true};
        return this.#date.toISOString();
    }
}