import { PictureCollection } from '../../components/PictureCollection'
import { ProductsCollection } from '../../components/ProductsCollection'
import { ProductCard } from '../../components/ProductsCollection/ProductCard'
import { items } from '../../database/in-memory/index'

export function Home() {
  return (
    <div>
      <PictureCollection />

      <ProductsCollection title="Calcinhas!">
        {items.calcinha.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id}
            discountPercentage={Math.floor(
              ((item.price.withoutDiscount - item.price.withDiscount) * 100) /
                item.price.withoutDiscount,
            )}
            imgUrl={item.imgUrl}
            priceWithoutDiscount={item.price.withoutDiscount
              .toFixed(2)
              .replace('.', ',')}
            priceWithDiscount={item.price.withDiscount
              .toFixed(2)
              .replace('.', ',')}
            title={item.name}
          />
        ))}
      </ProductsCollection>
    </div>
  )
}
