import { PictureCollection } from '../../components/PictureCollection'
import { ProductsCollection } from '../../components/ProductsCollection'
import { ProductCard } from '../../components/ProductsCollection/ProductCard'

export function Home() {
  return (
    <div>
      <PictureCollection />

      <ProductsCollection title="Promoções!">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsCollection>
    </div>
  )
}
