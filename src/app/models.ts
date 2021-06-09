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

export class Cart {
    public items: CartItem[];
    constructor() {
        this.items = [];
    }

    add(book: BookModel) {
        const filteredArray = this.items.filter((el) => el.book === book);

        if(filteredArray.length) {
            filteredArray[0].count++;
            filteredArray[0].total += filteredArray[0].book.price;
        } else {
            this.items.push({book: book, count: 1, total: book.price});
        }
    }

    delete(cartItem: CartItem) {
        const index = this.items.findIndex((el) => el === cartItem);
        this.items.splice(index, 1);
    }
}