import {
  CategoryItem,
  HeaderContainer,
  HeaderContent,
  HeaderContentBottom,
  HeaderContentTop,
  SearchContainer,
  SearchInput,
} from './styles'

import logoImg from '../../assets/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContentTop>
          <NavLink to="/ka_rita">
            <img src={logoImg} alt="" />
          </NavLink>

          <SearchContainer>
            <SearchInput placeholder="O que você procura ?" />
            <MagnifyingGlass />
          </SearchContainer>

          {/* <ShoppingCartSimple /> */}
        </HeaderContentTop>

        <HeaderContentBottom>
          <CategoryItem>
            <NavLink to="/ka_rita/todas">Todas</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/ka_rita/sutia">Sutiã</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/ka_rita/calcinha">Calcinha</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/ka_rita/conjunto">Conjunto</NavLink>
          </CategoryItem>
          {/* <CategoryItem>Promoção</CategoryItem> */}
          {/* <CategoryItem>Marcas</CategoryItem> */}
          {/* <CategoryItem>Praia</CategoryItem> */}
          {/* <CategoryItem>Body</CategoryItem> */}
          {/* <CategoryItem>Modelador</CategoryItem> */}
          {/* <CategoryItem>Acessórios</CategoryItem> */}
        </HeaderContentBottom>
      </HeaderContent>
    </HeaderContainer>
  )
}
