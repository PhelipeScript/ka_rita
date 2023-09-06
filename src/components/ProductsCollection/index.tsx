import { ReactNode } from 'react'
import { ProductCardContainer, ProductsCollectionContainer } from './styles'

interface ProductsCollectionProps {
  children: ReactNode
  title: string
}

export function ProductsCollection({
  title,
  children,
}: ProductsCollectionProps) {
  return (
    <ProductsCollectionContainer>
      <h1>{title}</h1>
      <ProductCardContainer>{children}</ProductCardContainer>
    </ProductsCollectionContainer>
  )
}
