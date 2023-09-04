import { Header } from '../../components/Header'
import { PictureCollection } from '../../components/PictureCollection'
import { ProductsCollection } from '../../components/ProductsCollection'

export function Home() {
  return (
    <div>
      <Header />
      <PictureCollection />
      <ProductsCollection title="Promoções!" />
      <ProductsCollection title="Novidades!" />
    </div>
  )
}
