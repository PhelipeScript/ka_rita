import { styled } from 'styled-components'

export const ProductsCollectionContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  & > h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-600']};
  }

  & + & {
    margin-top: 3rem;
  }
`

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 477px;
  margin-top: 3rem;

  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`
