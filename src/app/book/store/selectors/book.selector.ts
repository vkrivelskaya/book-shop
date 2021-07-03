import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { BookState } from "../state/book.state";

export const selectBooks = (state: AppState) => state.books;
export const selectBooksList = createSelector (
    selectBooks,
    (state: BookState) => state.books
)

export const selectSelectedBook = createSelector (
    selectBooks,
    (state: BookState) => state.selectedBook
)