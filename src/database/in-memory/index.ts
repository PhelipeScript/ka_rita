// import calcinha1 from '../../assets/calcinhas/calcinha1.png'
// import calcinha2 from '../../assets/calcinhas/calcinha2.png'
// import calcinha3 from '../../assets/calcinhas/calcinha3.png'
// import calcinha4 from '../../assets/calcinhas/calcinha4.png'
// import calcinha5 from '../../assets/calcinhas/calcinha5.png'
// import calcinha6 from '../../assets/calcinhas/calcinha6.png'
// import calcinha7 from '../../assets/calcinhas/calcinha7.png'

// Calcinhas
import calcinhaBiquini from '../../assets/calcinha/calcinha-biquini.jpg'
import calcinhaCinturaAlta from '../../assets/calcinha/calcinha-cintura-alta.jpg'

// Conjuntos
import conjuntoBasiquinhoSustentacao from '../../assets/conjunto/conjunto-basiquinho-sustentacao.jpg'
import conjuntoBasiquinhoSustentacao1 from '../../assets/conjunto/conjunto-basiquinho-sustentacao-1.jpg'
import conjuntoEleganciaLilas from '../../assets/conjunto/conjunto-elegancia-lilas.jpg'
import conjuntoEleganciaRosa from '../../assets/conjunto/conjunto-elegancia-rosa.jpg'
import conjuntoEleganciaRosa1 from '../../assets/conjunto/conjunto-elegancia-rosa-1.jpg'
import conjuntoUltraElegancia from '../../assets/conjunto/conjunto-ultra-elegancia.jpg'
import conjuntoUltraElegancia1 from '../../assets/conjunto/conjunto-ultra-elegancia-1.jpg'

// Sutiã
import sutiaNadadorSemBojo from '../../assets/sutia/sutia-nadador-sem-bojo.jpg'
import sutiaReforcadoSemBojoBege from '../../assets/sutia/sutia-reforcado-sem-bojo-bege.jpg'
import sutiaReforcadoSemBojoBranco from '../../assets/sutia/sutia-reforcado-sem-bojo-branco.jpg'


export interface ProductProps {
    id: string;
    name: string;
    description: string | null;
    size: string[];
    color: string[];
    price: { withoutDiscount: number, withDiscount: number }
    imgUrl: string[]
    category: string
}

interface Items {
    calcinha: ProductProps[];
    sutia: ProductProps[];
    conjunto: ProductProps[];
    // lingerie: ProductProps[];
}

export const items: Items = {
    calcinha: [
        {
            id: '1',
            name: 'Calcinha Biquíni',
            description: '',
            color: ['red'],
            imgUrl: [calcinhaBiquini],
            price: { withDiscount: 9.99, withoutDiscount: 24.99 },
            size: ['P', 'M', 'G'],
            category: 'calcinha'
        },
        {
            id: '2',
            name: 'Calcinha Cintura Alta',
            description: '',
            color: ['blue'],
            imgUrl: [calcinhaCinturaAlta],
            price: { withDiscount: 17.99, withoutDiscount: 34.99 },
            size: ['P', 'M', 'G'],
            category: 'calcinha'
        },
    ],

    sutia: [
        {
            id: '3',
            name: 'Sutiã Nadador Sustentação sem Bojo',
            description: '',
            color: ['white'],
            imgUrl: [sutiaNadadorSemBojo],
            price: { withDiscount: 35.99, withoutDiscount: 49.99 },
            size: ['P', 'M', 'G'],
            category: 'sutia'
        },
        {
            id: '4',
            name: 'Sutiã Reforçado Sem Bojo',
            description: '',
            color: ['white'],
            imgUrl: [sutiaReforcadoSemBojoBranco],
            price: { withDiscount: 34.99, withoutDiscount: 49.99 },
            size: ['P', 'M', 'G'],
            category: 'sutia'
        },
        {
            id: '5',
            name: 'Sutiã Reforçado Sem Bojo',
            description: '',
            color: ['#f0ead6'],
            imgUrl: [sutiaReforcadoSemBojoBege],
            price: { withDiscount: 25.99, withoutDiscount: 49.99 },
            size: ['P', 'M', 'G'],
            category: 'sutia'
        },
    ],

    conjunto: [
        {
            id: '6',
            name: 'Conjunto Basiquinho Sustentação',
            description: '',
            color: ['white'],
            imgUrl: [conjuntoBasiquinhoSustentacao, conjuntoBasiquinhoSustentacao1],
            price: { withDiscount: 54.99, withoutDiscount: 89.99 },
            size: ['G', 'G1', 'G2'],
            category: 'conjunto'
        },
        {
            id: '7',
            name: 'Conjunto Elegância',
            description: '',
            color: ['pink'],
            imgUrl: [conjuntoEleganciaRosa, conjuntoEleganciaRosa1],
            price: { withDiscount: 44.99, withoutDiscount: 79.99 },
            size: ['P', 'M', 'G'],
            category: 'conjunto'
        },
        {
            id: '8',
            name: 'Conjunto Ulta Elegância',
            description: '',
            color: ['white'],
            imgUrl: [conjuntoUltraElegancia, conjuntoUltraElegancia1],
            price: { withDiscount: 44.99, withoutDiscount: 79.99 },
            size: ['P', 'M', 'G'],
            category: 'conjunto'
        },
        {
            id: '9',
            name: 'Conjunto Elegância',
            description: '',
            color: ['#cda4de'],
            imgUrl: [conjuntoEleganciaLilas],
            price: { withDiscount: 35.99, withoutDiscount: 59.99 },
            size: ['P', 'M', 'G'],
            category: 'conjunto'
        },
    ],
}
