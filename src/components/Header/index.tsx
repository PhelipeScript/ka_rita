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

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContentTop>
          <img src={logoImg} alt="" />

          <SearchContainer>
            <SearchInput placeholder="O que você procura ?" />
            <MagnifyingGlass />
          </SearchContainer>

          {/* <ShoppingCartSimple /> */}
        </HeaderContentTop>

        <HeaderContentBottom>
          <CategoryItem>Todas</CategoryItem>
          <CategoryItem>Promoção</CategoryItem>
          <CategoryItem>Marcas</CategoryItem>
          <CategoryItem>Sutiã</CategoryItem>
          <CategoryItem>Calcinha</CategoryItem>
          <CategoryItem>Meia</CategoryItem>
          <CategoryItem>Praia</CategoryItem>
          <CategoryItem>Body</CategoryItem>
          <CategoryItem>Modelador</CategoryItem>
          <CategoryItem>Acessórios</CategoryItem>
        </HeaderContentBottom>
      </HeaderContent>
    </HeaderContainer>
  )
}
