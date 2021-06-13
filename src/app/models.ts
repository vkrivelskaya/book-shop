import { BookCategories } from '../app/constants';

export interface BookModel {
    name: string;
    description: string;
    price: number;
    category: BookCategories;
    createDate: number;
    isAvailable: boolean;
}

export interface CartItem {
    book: BookModel;
    count: number;
    total: number;
}

export interface ConfigOptions {
    id?: number;
    login?: string;
    email?: string;
}