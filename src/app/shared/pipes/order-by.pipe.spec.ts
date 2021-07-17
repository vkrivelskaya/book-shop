import { OrderByPipe } from './order-by.pipe';

const arrayWithoutOrder = [
  { name: 'abc',
    price: 30,
  },
  { name: 'test',
    price: 20,
  },
  { name: 'aggg',
    price: 1,
  },
  { name: 'lll',
    price: 5,
  },
];

const arrayOrderByPriceDescending = [
  { name: 'abc',
    price: 30,
  },
  { name: 'test',
    price: 20,
  },
  { name: 'lll',
    price: 5,
  },
  { name: 'aggg',
    price: 1,
  },
];

const arrayOrderByPriceAscending = [
  { name: 'aggg',
    price: 1,
  },
  { name: 'lll',
    price: 5,
  },
  { name: 'test',
    price: 20,
  },
  { name: 'abc',
    price: 30,
  },
];

const arrayOrderByNameDescending = [
  { name: 'test',
    price: 20,
  },
  { name: 'lll',
    price: 5,
  },
  { name: 'aggg',
    price: 1,
  },
  { name: 'abc',
    price: 30,
  },
];

const arrayOrderByNameAscending = [
  { name: 'abc',
    price: 30,
  },
  { name: 'aggg',
    price: 1,
  },
  { name: 'lll',
    price: 5,
  },
  { name: 'test',
    price: 20,
  },
];

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order by price, descending', () => {
    expect(pipe.transform(arrayWithoutOrder, 'price', true)).toEqual(arrayOrderByPriceDescending);
  });

  it('should order by price, ascending', () => {
    expect(pipe.transform(arrayWithoutOrder, 'price', false)).toEqual(arrayOrderByPriceAscending);
  });

  it('should order by name, descending', () => {
    expect(pipe.transform(arrayWithoutOrder, 'name', true)).toEqual(arrayOrderByNameDescending);
  });

  it('should order by price, ascending', () => {
    expect(pipe.transform(arrayWithoutOrder, 'name', false)).toEqual(arrayOrderByNameAscending);
  });
});
