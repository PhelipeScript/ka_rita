import {
  PriceOrViewContainer,
  Prices,
  ProductCardContent,
  ViewProductContainer,
} from './styles'

interface ProductCardProps {
  id: string
  discountPercentage: number
  imgUrl: string
  title: string
  priceWithoutDiscount: string
  priceWithDiscount: string
}

export function ProductCard({
  id,
  discountPercentage,
  imgUrl,
  title,
  priceWithoutDiscount,
  priceWithDiscount,
}: ProductCardProps) {
  return (
    <ProductCardContent to={`/ka_rita/product/${id}`} title="Ver produto">
      <span>{discountPercentage}% off</span>
      <img src={imgUrl} alt="" />
      <h3>{title}</h3>

      <PriceOrViewContainer>
        <Prices>
          <span>R$ {priceWithoutDiscount}</span>
          <strong>R$ {priceWithDiscount}</strong>
        </Prices>

        <ViewProductContainer>
          <button>Ver produto</button>
        </ViewProductContainer>
      </PriceOrViewContainer>
    </ProductCardContent>
  )
}
