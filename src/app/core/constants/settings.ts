import { BookFilter } from 'src/app/book/constants/filter';
import { SortField } from 'src/app/cart/constants/sort-field';
import { SettingsModel } from '../models/settings-model';


export const defaultSettings: SettingsModel = {
  filter: BookFilter.category,
  sortField: SortField.price,
};
