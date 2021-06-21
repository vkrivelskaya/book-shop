import { BookCategories } from '../../book/constants/books';

export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
  id: number;
}
