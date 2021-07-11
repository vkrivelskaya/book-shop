import { BookFilter } from '../../book/constants/filter';
import { SortField } from '../../cart/constants/sort-field';
import { SettingsModel } from '../models/settings-model';

export const defaultSettings: SettingsModel = {
  filter: BookFilter.category,
  sortField: SortField.price,
};
