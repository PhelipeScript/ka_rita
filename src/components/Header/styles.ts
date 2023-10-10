import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  padding: 2.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 2px 0 0 ${(props) => props.theme['gray-300']};
`

export const HeaderContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  svg {
    font-size: 1.865rem;
    cursor: pointer;
  }

  img {
    width: 100%;

    @media (max-width: 768px) {
      width: 70%;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid ${(props) => props.theme.black};
  padding: 0 5px;
  height: 40px;
  width: 450px;

  svg {
    color: red;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 200px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme['gray-900']};
  font-weight: bold;
  padding: 0 10px;

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 400;
  }
`

export const HeaderContentBottom = styled.ul`
  list-style: none;
  padding: 1rem 30px;
  width: 100%;
  height: 50px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`

export const CategoryItem = styled.li`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`
