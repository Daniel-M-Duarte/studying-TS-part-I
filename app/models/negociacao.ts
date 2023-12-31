export class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number, 
        private _valor: number,
    ){}    

    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        const data = new Date(this._data.getTime()); 
        return this._valor * this._quantidade;
    }
}