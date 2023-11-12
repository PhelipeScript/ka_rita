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
          <NavLink to="/">
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
            <NavLink to="/todas">Todas</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/sutia">Sutiã</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/calcinha">Calcinha</NavLink>
          </CategoryItem>
          <CategoryItem>
            <NavLink to="/conjunto">Conjunto</NavLink>
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
