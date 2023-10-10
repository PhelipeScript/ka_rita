import { css, keyframes, styled } from 'styled-components'

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
  $active: 'yes' | 'no'
}

export const ImageOption = styled.button<ImageOptionProps>`
  max-width: 100%;
  cursor: pointer;
  border: none;

  ${(props) =>
    props.$active === 'yes'
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
      flex-direction: row;
      width: 200px;
    }
  }

  & > div img {
    max-width: 100%;
    min-height: 100%;
    object-fit: fill;

    @media (max-width: 768px) {
      max-height: 100%;
    }
  }

  & > img {
    width: auto;
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    /* image-rendering: pixelated; */
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
  $variant: string
}

export const ColorOption = styled(DefaultOption)<ColorOptionProps>`
  background: ${(props) => props.$variant};
`

interface SizeOptionProps {
  $variant: string
}

export const SizeOption = styled(DefaultOption)<SizeOptionProps>`
  &::after {
    content: '${(props) => props.$variant}';
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

const loadingAnimation = keyframes`
  20% { transform: rotate(0deg) }
  50% {  transform: rotate(180deg)  }
  70% {  transform: rotate(360deg)  }
  100% {  transform: rotate(540deg)  }
`

export const FreteForm = styled.form`
  display: grid;
  grid-template-areas: 'label label' 'input button';
  gap: 5px;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 30px;
  /* background: ${(props) => props.theme['gray-100']}; */

  label {
    grid-area: label;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
  }

  input {
    grid-area: input;
    all: unset;
    /* width: 100%; */
    padding: 0 5px;
    box-shadow: 0 0 0 2px transparent;
    border-bottom: 1px solid ${(props) => props.theme['blue-400']};

    &:focus {
      border: none;
      box-shadow: 0 0 0 2px ${(props) => props.theme['blue-400']};
      border-radius: 4px;
      transition: all 0.1s;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    grid-area: button;
    all: unset;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.865rem;
    padding: 10px 20px;
    width: 72px;
    height: 18px;
    border-radius: 4px;
    background: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme.white};
    text-align: center;
    transition: all 0.8s ease;

    &:not(:disabled):hover {
      background: #1a43bf;
      transition: background 0.1s ease;
    }

    &:disabled {
      cursor: not-allowed;
      width: 0;
      height: 18px;
      border-radius: 8px;
      animation-name: ${loadingAnimation};
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
  }
`

export const FreteServiceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`

interface FreteServiceCardProps {
  $visible: 'yes' | 'no'
}

export const FreteServiceCard = styled.div<FreteServiceCardProps>`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 4px;
  display: ${(props) => (props.$visible === 'yes' ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.865rem;
    }
  }

  & > strong {
    white-space: nowrap;
  }

  & + & {
    border-left: 1px solid black;
    border-radius: 0 4px 4px 0;
    padding-left: 10px;
  }
`
