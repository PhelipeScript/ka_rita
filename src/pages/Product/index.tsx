import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'

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

const freteFormValidationSchema = z.object({
  cep: z
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'Informe um CEP válido'),
})

type FreteFormData = z.infer<typeof freteFormValidationSchema>

interface FreteServicesProps {
  ceporigem: string
  cepdestino: string
  valorpac: string
  prazopac: string
  valorsedex: string
  prazosedex: string
}

export function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState<string>('')
  const [freteButtonLoading, setFreteButtonLoading] = useState(false)
  const [freteServices, setFreteServices] = useState<FreteServicesProps | null>(
    null,
  )
  const { register, handleSubmit, reset } = useForm<FreteFormData>({
    resolver: zodResolver(freteFormValidationSchema),
    defaultValues: {
      cep: '',
    },
  })

  async function handleFreteForm({ cep }: FreteFormData) {
    setFreteServices(null)
    setFreteButtonLoading(true)
    const response = await axios.get(
      `https://www.cepcerto.com/ws/json-frete/05821030/${cep}/1000/14/30/20/63cdbd6e2753ca6b4ad26c91753ba41e2f36d268/`,
    )

    setFreteButtonLoading(false)
    setFreteServices(response.data)
    reset()
  }

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
            </OptionsContainer>

            <Button>Comprar</Button>
          </ProductForm>

          <FreteForm action="" onSubmit={handleSubmit(handleFreteForm)}>
            <label htmlFor="cep">
              <MapPin size={18} weight="fill" color="#0086FF" />
              Calcular frete e prazo:
            </label>
            <input
              type="number"
              placeholder="Digite seu CEP"
              {...register('cep')}
            />
            <button disabled={freteButtonLoading}>
              {freteButtonLoading ? '' : 'Calcular'}
            </button>
          </FreteForm>

          <FreteServiceContainer>
            <FreteServiceCard
              $visible={freteServices?.valorsedex ? 'yes' : 'no'}
            >
              <div>
                <strong>Correios SEDEX</strong>
                <span>
                  Prazo de entrega: {freteServices?.prazosedex} dias úteis.
                </span>
              </div>
              <strong>R$ {freteServices?.valorsedex}</strong>
            </FreteServiceCard>

            <FreteServiceCard $visible={freteServices?.valorpac ? 'yes' : 'no'}>
              <div>
                <strong>Correios PAC</strong>
                <span>
                  Prazo de entrega: {freteServices?.prazopac} dias úteis.
                </span>
              </div>
              <strong>R$ {freteServices?.valorpac}</strong>
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
