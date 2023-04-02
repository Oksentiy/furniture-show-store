import {AllProductsData} from "../../types";

type SortOrder = 'asc' | 'desc';

export const sortAlphabetically = (data: AllProductsData[], order: SortOrder = 'asc'): AllProductsData[] => {
  return [...data].sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};

export const sortByPrice = (data: AllProductsData[], order: SortOrder = 'asc'): AllProductsData[] => {
  return [...data].sort((a, b) => {
    if (order !== 'asc') {
      return +b.price - +a.price;
    } else {
      return +a.price - +b.price;
    }
  });
};

export const sortDefault = (data: AllProductsData[]): AllProductsData[] => {
  return [...data].sort((a, b) => {
    return +a.id - +b.id;
  });
};

export const sortData = (sortType: string, data:AllProductsData[] ) => {
  switch(sortType) {
    case 'rate':
      return sortDefault(data);
    case 'price ascending':
      return sortByPrice(data, 'asc');
    case 'price descending':
      return sortByPrice(data, 'desc');
    case 'A-Z':
      return sortAlphabetically(data, 'asc');
    case 'Z-A':
      return sortAlphabetically(data, 'desc');
    default:
      throw new Error('Invalid sort type!');
  }
}
