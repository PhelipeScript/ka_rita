import styled from 'styled-components'

export const CategoryContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
