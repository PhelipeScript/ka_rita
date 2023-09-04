import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

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

export const PriceOrViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;

  span {
    text-decoration: line-through;
    text-transform: uppercase;
    font-style: italic;
    font-size: 14px;
    color: ${(props) => props.theme['gray-500']};
  }

  strong {
    text-transform: uppercase;
    font-size: 1.35rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const ViewProductContainer = styled.div`
  width: 100%;
  height: 100%;

  display: none;
  align-items: center;
  justify-content: center;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    width: 80%;
    height: 40px;
    box-shadow: 0 0 0 1px ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-700']};
    font-weight: bold;
    text-transform: uppercase;
  }

  button:hover {
    opacity: 0.6;
    transition: opacity 0.2s;
  }
`

export const ProductCardContent = styled(NavLink)`
  width: 286px;
  display: flex;
  flex-direction: column;
  transition: display 1s;
  text-decoration: none;

  & > span:first-of-type {
    background: ${(props) => props.theme['red-800']};
    color: ${(props) => props.theme.white};
    width: fit-content;
    padding: 5px 10px;
    border-radius: 4px 4px 0 0;
  }

  img {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 229px;
  }

  h3 {
    color: ${(props) => props.theme['gray-500']};
    padding: 10px 0;
    height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover ${Prices} {
    display: none;
  }

  &:hover ${ViewProductContainer} {
    display: flex;
  }
`