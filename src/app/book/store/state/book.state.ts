import { BookModel } from "src/app/core/models/book";

export interface BookState {
    books: BookModel[]|null;
    selectedBook: BookModel|null;
}

export const initialBookState: BookState = {
    books: null,
    selectedBook: null,
}
