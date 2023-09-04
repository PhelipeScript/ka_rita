import { PictureCollection } from '../../components/PictureCollection'
import { ProductsCollection } from '../../components/ProductsCollection'

export function Home() {
  return (
    <div>
      <PictureCollection />
      <ProductsCollection title="Promoções!" />
      <ProductsCollection title="Novidades!" />
    </div>
  )
}
