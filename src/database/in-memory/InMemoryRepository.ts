import { ProductProps, items } from ".";

export class InMemoryRepository {
  getItemById(id: string) {
    let item: ProductProps | undefined; 

    if (!item) {
      item = items.calcinha.find(item => item.id === id);
    }

    // if (!item) {
    //   item = items.conjunto.find(item => item.id === id);
    // }

    // if (!item) {
    //   item = items.lingerie.find(item => item.id === id);
    // }

    // if (!item) {
    //   item = items.sutia.find(item => item.id === id);
    // }

    if (!item) {
      return null;
    }

    return item;
  } 
}
