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
          <CategoryItem>Todas</CategoryItem>
          <CategoryItem>Sutiã</CategoryItem>
          <CategoryItem>Calcinha</CategoryItem>
          <CategoryItem>Conjunto</CategoryItem>
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
