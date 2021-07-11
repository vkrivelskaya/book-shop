import { BookFilter } from 'src/app/book/constants/filter';
import { SortField } from 'src/app/cart/constants/sort-field';

export interface SettingsModel {
  filter: BookFilter;
  sortField: SortField;
}
