import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookCategories } from 'src/app/book/constants/books';
import { BookModel } from '../../models/book';
import { CartItem } from '../../models/cart-item';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const books:BookModel[] = [
      {
        name: 'The Financier by Theodore Dreiser',
        description: 'Frank Cowperwood, a fiercely ambitious businessman, ' +
        'emerges as the very embodiment of greed as he relentlessly seeks satisfaction in ' +
        'wealth, women, and power. As Cowperwood deals and double-deals, betrays and is in ' +
        'turn betrayed, his rise and fall come to represent the American success story ' +
        'stripped down to brutal realities-a struggle for spoils without conscience or pity. ' +
        'Dreiser\'s 1912 classic remains an unsparing social critique as well as a devastating ' +
        'character study of one of the most unforgettable American businessmen in twenty century literature',
        price: 8.99,
        category: BookCategories.Romance,
        createDate: 1912,
        isAvailable: true,
        id: 1,
      },
      {
        name: 'Animal Farm by George Orwell',
        description: 'A farm is taken over by its overworked,' +
        'mistreated animals. With flaming idealism and stirring' +
        'slogans, they set out to create a paradise of progress,' +
        'justice, and equality. Thus the stage is set for one of' +
        'the most telling satiric fables ever penned—a razor-edged' +
        'fairy tale for grown-ups that records the evolution from revolution' +
        'against tyranny to a totalitarianism just as terrible',
        price: 7.48,
        category: BookCategories.Dystopian,
        createDate: 1945,
        isAvailable: true,
        id: 2,
      },
      {
        name: 'The Old Man and The Sea by Ernest Hemingway',
        description: 'The Old Man and the Sea is one of Hemingway\'s most enduring works.' +
        'Told in language of great simplicity and power, it is the story of an old Cuban' +
        'fisherman, down on his luck, and his supreme ordeal -- a relentless, agonizing battle' +
        'with a giant marlin far out in the Gulf Stream.',
        price: 9.49,
        category: BookCategories.Romance,
        createDate: 1952,
        isAvailable: false,
        id: 3,
      },
    ];

    return { books };
  }
  // genId(books: BookModel[]): number {
  //   return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  // }

}