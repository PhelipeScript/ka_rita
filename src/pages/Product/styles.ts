import { css, styled } from 'styled-components'

export const ProductContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;

  & > p {
    text-transform: lowercase;
    font-weight: bold;
  }

  & > p::first-letter {
    text-transform: uppercase;
  }

  & > p > a {
    color: ${(props) => props.theme.black};
  }
`

export const ProductInfo = styled.main`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  gap: 4rem;

  box-shadow: 0 1px 0 0 ${(props) => props.theme.black};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

interface ImageOptionProps {
  active?: boolean
}

export const ImageOption = styled.button<ImageOptionProps>`
  max-width: 100%;
  cursor: pointer;
  border: none;

  ${(props) =>
    props.active
      ? css`
          opacity: 1;
          border: 1px solid;
        `
      : css`
          opacity: 0.5;
        `}
`

export const ImageContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 636px;
  position: relative;

  & > div {
    width: 74px;
    height: 100px;
    position: absolute;
    left: -100px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      left: 0;
      bottom: -120px;
    }
  }

  & > div img {
    max-width: 100%;
    min-height: 100%;
    object-fit: fill;
  }

  & > img {
    width: auto;
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }
`

export const InfoContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.9rem;
  }

  & > span {
    text-decoration: line-through;
    font-size: 1rem;
    margin-top: 20px;
  }

  & > strong {
    font-size: 1.65rem;
    color: ${(props) => props.theme.red};
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`

export const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > label {
    font-size: 0.865rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0 40px;
`

const DefaultOption = styled.input`
  all: unset;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid black;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: '▲';
    position: absolute;
    bottom: -20px;
    left: 12px;
    width: fit-content;
    height: auto;
    color: black;
  }
`

interface ColorOptionProps {
  variant:
    | 'blue'
    | 'red'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'black'
    | 'white'
    | 'beige'
    | 'purple'
}

export const ColorOption = styled(DefaultOption)<ColorOptionProps>`
  background: ${(props) => props.variant};
`

interface SizeOptionProps {
  variant: 'P' | 'M' | 'G'
}

export const SizeOption = styled(DefaultOption)<SizeOptionProps>`
  &::after {
    content: '${(props) => props.variant}';
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Button = styled.button`
  all: unset;
  padding: 1rem;
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  background: ${(props) => props.theme['pink-700']};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.pink};
    transition: background 0.1s ease;
  }
`
