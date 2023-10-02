import { useNavigate, useParams } from 'react-router-dom'
import { InMemoryRepository } from '../../database/in-memory/InMemoryRepository'
import {
  Button,
  ColorOption,
  ImageContainer,
  ImageOption,
  InfoContainer,
  OptionsContainer,
  ProductContainer,
  ProductForm,
  ProductInfo,
  SizeOption,
} from './styles'

export function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()

  if (!productId) {
    navigate('/', { replace: true })
    return <h1>Page Not Found!</h1>
  }

  const inMemoryRepository = new InMemoryRepository()

  const item = inMemoryRepository.getItemById(productId)

  if (!item) {
    navigate('/', { replace: true })
    return <h1>Page Not Found!</h1>
  }

  return (
    <ProductContainer>
      <p>
        Você está em: <a href="/">Home</a> &#10095;{' '}
        <a href="/">{item.category}</a> &#10095; {item.name}
      </p>

      <ProductInfo>
        <ImageContainer>
          <div>
            <ImageOption active>
              <img src={item.imgUrl} alt="" />
            </ImageOption>
          </div>
          <img src={item.imgUrl} alt="" />
        </ImageContainer>

        <InfoContainer>
          <h2>{item.name}</h2>
          <span>
            R$ {item.price.withoutDiscount.toFixed(2).replace('.', ',')}
          </span>
          <strong>
            R$ {item.price.withDiscount.toFixed(2).replace('.', ',')}
          </strong>
          <ProductForm>
            <label htmlFor="colors">Cores disponíveis: </label>
            <OptionsContainer>
              <ColorOption type="radio" name="color" variant="black" required />
              <ColorOption type="radio" name="color" variant="white" required />
              <ColorOption type="radio" name="color" variant="beige" required />
            </OptionsContainer>

            <label>Escolha o tamanho: </label>
            <OptionsContainer>
              <SizeOption variant="P" type="radio" name="size" required />
              <SizeOption variant="M" type="radio" name="size" required />
              <SizeOption variant="G" type="radio" name="size" required />
            </OptionsContainer>

            <Button>Comprar</Button>
          </ProductForm>
        </InfoContainer>
      </ProductInfo>
    </ProductContainer>
  )
}
