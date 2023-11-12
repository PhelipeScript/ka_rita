import { useLocation } from 'react-router-dom'
import { InMemoryRepository } from '../../database/in-memory/InMemoryRepository'
import { ProductProps } from '../../database/in-memory'
import { CategoryContainer } from './styles'
import { ProductCard } from '../../components/ProductsCollection/ProductCard'

export function Category() {
  const location = useLocation()

  const inMemoryRepository = new InMemoryRepository()

  let items: ProductProps[]

  switch (location.pathname.substring(1, 50).trim()) {
    case 'conjunto':
      items = inMemoryRepository.getItemByCategory({ category: 'conjunto' })
      break
    case 'calcinha':
      items = inMemoryRepository.getItemByCategory({ category: 'calcinha' })
      break
    case 'sutia':
      items = inMemoryRepository.getItemByCategory({ category: 'sutia' })
      break
    case 'todas':
      items = inMemoryRepository.getAllItems()
      break
    default:
      return <h1>Page Not Found</h1>
  }

  return (
    <CategoryContainer>
      {items.map((item) => (
        <ProductCard
          id={item.id}
          key={item.id}
          discountPercentage={Math.floor(
            ((item.price.withoutDiscount - item.price.withDiscount) * 100) /
              item.price.withoutDiscount,
          )}
          imgUrl={item.imgUrl[0]}
          priceWithoutDiscount={item.price.withoutDiscount
            .toFixed(2)
            .replace('.', ',')}
          priceWithDiscount={item.price.withDiscount
            .toFixed(2)
            .replace('.', ',')}
          title={item.name}
        />
      ))}
    </CategoryContainer>
  )
}
