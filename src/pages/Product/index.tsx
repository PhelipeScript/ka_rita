import { useParams } from 'react-router-dom'

export function Product() {
  const { productId } = useParams()
  return <h1>Product {productId}</h1>
}
