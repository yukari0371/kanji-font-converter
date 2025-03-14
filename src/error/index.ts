export class KcError extends Error {
    constructor (message: string) {
        super(message);
        this.name === "KcError";
    }
};