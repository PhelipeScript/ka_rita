import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { InMemoryRepository } from '../../database/in-memory/InMemoryRepository'
import {
  Button,
  ColorOption,
  FreteForm,
  FreteServiceCard,
  FreteServiceContainer,
  ImageContainer,
  ImageOption,
  InfoContainer,
  OptionsContainer,
  ProductContainer,
  ProductForm,
  ProductInfo,
  SizeOption,
} from './styles'
import { MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()

  const [activeImg, setActiveImg] = useState<string>('')

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

  // eslint-disable-next-line
  useEffect(() => setActiveImg(item.imgUrl[0]), [item])

  return (
    <ProductContainer>
      <p>
        Você está em: <NavLink to="/ka_rita">Home</NavLink> &#10095;{' '}
        <NavLink to={`/ka_rita/${item.category}`}>{item.category}</NavLink>{' '}
        &#10095; {item.name}
      </p>

      <ProductInfo>
        <ImageContainer>
          <div>
            {item.imgUrl.map((img) => (
              <ImageOption
                key={img}
                $active={img === activeImg ? 'yes' : 'no'}
                onClick={() => setActiveImg(img)}
              >
                <img src={img} alt="" />
              </ImageOption>
            ))}
          </div>
          <img src={activeImg} alt="" />
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
              {item.color.map((color) => (
                <ColorOption
                  key={color}
                  type="radio"
                  name="color"
                  $variant={color}
                  required
                />
              ))}
            </OptionsContainer>

            <label>Escolha o tamanho: </label>
            <OptionsContainer>
              {item.size.map((size) => (
                <SizeOption
                  key={size}
                  $variant={size}
                  type="radio"
                  name="size"
                  required
                />
              ))}
              {/* <SizeOption $variant="P" type="radio" name="size" required />
              <SizeOption $variant="M" type="radio" name="size" required />
              <SizeOption $variant="G" type="radio" name="size" required /> */}
            </OptionsContainer>

            <Button>Comprar</Button>
          </ProductForm>

          <FreteForm action="">
            <label htmlFor="cep">
              <MapPin size={18} weight="fill" color="#0086FF" />
              Calcular frete e prazo:
            </label>
            <input
              type="number"
              name="cep"
              id="cep"
              placeholder="Digite seu CEP"
            />
            <button>Calcular</button>
          </FreteForm>

          <FreteServiceContainer>
            <FreteServiceCard $visible="yes">
              <div>
                <strong>Correios SEDEX</strong>
                <span>Prazo de entrega: 2 dias úteis.</span>
              </div>
              <strong>R$ 27,90</strong>
            </FreteServiceCard>

            <FreteServiceCard $visible="yes">
              <div>
                <strong>Correios PAC</strong>
                <span>Prazo de entrega: 6 dias úteis.</span>
              </div>
              <strong>R$ 20,90</strong>
            </FreteServiceCard>
          </FreteServiceContainer>
        </InfoContainer>
      </ProductInfo>

      <div>
        <h2>Descrição</h2>
      </div>
    </ProductContainer>
  )
}
