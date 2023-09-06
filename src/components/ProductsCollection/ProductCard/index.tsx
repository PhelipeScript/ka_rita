import {
  PriceOrViewContainer,
  Prices,
  ProductCardContent,
  ViewProductContainer,
} from './styles'

import imgTest from '../../../assets/calcinhas/calcinha1.png'

export function ProductCard() {
  return (
    <ProductCardContent to="/product/1" title="Ver produto">
      <span>10% off</span>
      <img src={imgTest} alt="" />
      <h3>
        Nome do produto com muitos caracteres para que seja possível testar
        muitas possibilidades.
      </h3>

      <PriceOrViewContainer>
        <Prices>
          <span>R$ 79,90</span>
          <strong>R$ 49,90</strong>
        </Prices>

        <ViewProductContainer>
          <button>Ver produto</button>
        </ViewProductContainer>
      </PriceOrViewContainer>
    </ProductCardContent>
  )
}
