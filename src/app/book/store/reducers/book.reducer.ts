import { State } from "@ngrx/store";
import { BookActions, BookActionsEnum } from "../actions/book.actions";
import { BookState, initialBookState } from "../state/book.state";

export function booksReducers(
  state = initialBookState,
  action: BookActions,
): BookState {
  switch(action.type) {
    case BookActionsEnum.GetBooksSuccess: {
      return {
        ...state,
        books: action.payload
      };
    }
    case BookActionsEnum.GetBooksError: {
      return {
        ...state,
        books: []
      };
    }
    case BookActionsEnum.GetBookSuccess: {
      return {
        ...state,
        selectedBook: action.payload
      };
    }
    default:
      return state;
  }
}
