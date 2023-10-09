import { ProductProps, items } from ".";

interface GetItemByCategoryProps {
  category: 'sutia' | 'calcinha' | 'conjunto'
}

export class InMemoryRepository {
  getItemById(id: string) {
    let item: ProductProps | undefined; 

    if (!item) {
      item = items.calcinha.find(item => item.id === id);
    }

    if (!item) {
      item = items.conjunto.find(item => item.id === id);
    }

    if (!item) {
      item = items.sutia.find(item => item.id === id);
    }

    if (!item) {
      return null;
    }

    return item;
  } 

  getItemByCategory({ category }: GetItemByCategoryProps ) {
    let item: ProductProps[]

    item = items[category]

    return item;
  }

  getAllItems() {
    let item: ProductProps[] = [];

    item.push(...items.calcinha)
    item.push(...items.sutia)
    item.push(...items.conjunto)

    return item;
  }
}
