import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

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
  transition: opacity 0.2s;

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

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

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
  max-width: 286px;
  width: 100%;
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
    min-height: 190px;
    height: 100%;
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
    opacity: 0;
  }

  &:hover ${ViewProductContainer} {
    opacity: 1;
    transition: opacity 0.2s;
  }
`
