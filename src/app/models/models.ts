import { BookCategories } from '../book/constants/books';

export interface BookModel {
    name: string;
    description: string;
    price: number;
    category: BookCategories;
    createDate: number;
    isAvailable: boolean;
}

export class CartItem {
    book: BookModel;
    count: number;
    total: number;

    constructor(book: BookModel, count: number, total: number) {
        this.book = book;
        this.count = count;
        this.total = total;
    }

    static clone(other: CartItem) {
        return new CartItem(other.book, other.count, other.total);
    }

    get bookPrice(): number {
        return this.book.price
    }

    get bookName(): string {
        return this.book.name;
    }

}

export interface ConfigOptions {
    id?: number;
    login?: string;
    email?: string;
}