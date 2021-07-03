import { Action } from "@ngrx/store";
import { BookModel } from "src/app/core/models/book";

export enum BookActionsEnum {
    GetBooks = '[Book] Get Books',
    GetBooksSuccess = '[Book] Get Books Success',
    GetBooksError = '[Books] Get Books Error',
    GetBook = '[Book] Get Book',
    GetBookSuccess = '[Book] Get Book Success',
    GetBookError = '[Book] Get Book Error',
}

export class GetBooks implements Action {
    public readonly type = BookActionsEnum.GetBooks;
}

export class GetBooksSuccess implements Action {
    public readonly type = BookActionsEnum.GetBooksSuccess;
    constructor(public payload: BookModel[]){}
}

export class GetBooksError implements Action {
    public readonly type = BookActionsEnum.GetBooksError;
}


export class GetBook implements Action {
    public readonly type = BookActionsEnum.GetBook;
    constructor (public payload: { id: number }) {};
}

export class GetBookSuccess implements Action {
    public readonly type = BookActionsEnum.GetBookSuccess;
    constructor(public payload: BookModel){}
}

export class GetBookError implements Action {
    public readonly type = BookActionsEnum.GetBookError;
}

export type BookActions = GetBook | GetBookSuccess | GetBookError | GetBooks | GetBooksSuccess | GetBooksError;