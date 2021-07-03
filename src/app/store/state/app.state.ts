import { RouterReducerState } from "@ngrx/router-store";
import { BookState, initialBookState } from "src/app/book/store/state/book.state";

export interface AppState {
    router?: RouterReducerState,
    books: BookState,
}

export const initialAppState = {
    books: initialBookState,
}

export function getInitialAppState(): AppState {
    return initialAppState;
}