import {
  PriceOrViewContainer,
  Prices,
  ProductCardContainer,
  ProductCardContent,
  ProductsCollectionContainer,
  ViewProductContainer,
} from './styles'

import imgTest from '../../assets/calcinhas/calcinha1.png'

interface ProductsCollectionProps {
  title: string
}

export function ProductsCollection({ title }: ProductsCollectionProps) {
  return (
    <ProductsCollectionContainer>
      <h1>{title}</h1>

      <ProductCardContainer>
        <ProductCardContent>
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

        <ProductCardContent>
          <span>10% off</span>
          <img src={imgTest} alt="" />
          <h3>Nome do produto com poucos caracteres</h3>

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
      </ProductCardContainer>
    </ProductsCollectionContainer>
  )
}
