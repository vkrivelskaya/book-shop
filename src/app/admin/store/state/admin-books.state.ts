import { OrderModel } from 'src/app/shared/models/order';
import { BookModel } from '../../../core/models/book';

export interface AdminBookState {
  books: BookModel[] | null;
  selectedBook: BookModel | null;

}

export const initialAdminBookState: AdminBookState = {
  books: null,
  selectedBook: null,
};
