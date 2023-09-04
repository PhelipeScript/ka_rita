import { styled } from 'styled-components'

export const PictureCollectionContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;

  display: grid;
  grid-template-areas: 'img1 img2' 'img1 img3';
  gap: 5px;
  align-items: center;
  justify-content: center;

  &:hover div:not(:hover) {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
`

interface PictureContentProps {
  $gridArea: 'img1' | 'img2' | 'img3'
}

export const PictureContent = styled.div<PictureContentProps>`
  grid-area: ${(props) => props.$gridArea};
  display: flex;
  align-items: center;
  cursor: pointer;
`
