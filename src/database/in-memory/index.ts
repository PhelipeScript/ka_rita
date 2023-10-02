import calcinha1 from '../../assets/calcinhas/calcinha1.png'
import calcinha2 from '../../assets/calcinhas/calcinha2.png'
import calcinha3 from '../../assets/calcinhas/calcinha3.png'
import calcinha4 from '../../assets/calcinhas/calcinha4.png'
import calcinha5 from '../../assets/calcinhas/calcinha5.png'
import calcinha6 from '../../assets/calcinhas/calcinha6.png'
import calcinha7 from '../../assets/calcinhas/calcinha7.png'
// import calcinha8 from '../../assets/calcinhas/calcinha8.png'
// import calcinha9 from '../../assets/calcinhas/calcinha9.png'
// import calcinha10 from '../../assets/calcinhas/calcinha10.png'
// import calcinha11 from '../../assets/calcinhas/calcinha11.png'
// import calcinha12 from '../../assets/calcinhas/calcinha12.png'
// import calcinha13 from '../../assets/calcinhas/calcinha13.png'

export interface ProductProps {
    id: string;
    name: string;
    description: string | null;
    size: string[];
    color: string[];
    price: { withoutDiscount: number, withDiscount: number }
    imgUrl: string
    category?: string
}

interface Items {
    calcinha: ProductProps[];
    // sutia: ProductProps[];
    // conjunto: ProductProps[];
    // lingerie: ProductProps[];
}

export const items: Items = {
    calcinha: [
        {
            id: '1',
            name: 'Calcinhas com Renda',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Vermelho', 'Branco', 'Preto', 'Bege'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha1,
            category: 'calcinha'
        },
        {
            id: '2',
            name: 'Calcinhas Slim Aperta Barriga',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Preto', 'Bege', 'Rosa'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha2,
            category: 'calcinha'
        },
        {
            id: '3',
            name: 'Calcinhas Renda',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Preto', 'Branco'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha3,
            category: 'calcinha'
        },
        {
            id: '4',
            name: 'Calcinhas Tanga',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Azul', 'Vermelho', 'Branco', 'Bege'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha4,
            category: 'calcinha'
        },
        {
            id: '5',
            name: 'Kit 3 Calcinhas Microfibra Del Rio',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege/Preto/Branco'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha5,
            category: 'calcinha'
        },
        {
            id: '6',
            name: 'Calcinha Tradicional Microfibra',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege', 'Azul'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            },
            imgUrl: calcinha6,
            category: 'calcinha'
        },
        {
            id: '7',
            name: 'Calcinhas Microfibra',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege', 'Preto', 'Bege Escuro'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            }, 
            imgUrl: calcinha7,
            category: 'calcinha'
        },
    ],

    // sutia: [
    //     {
    //         id: '8',
    //         name: 'Sutiã Loba Abertura Frontal',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Bege'],
    //         price: {
    //             withoutDiscount: 69.90,
    //             withDiscount: 44.90,
    //         }
    //     },
    //     {
    //         id: '9',
    //         name: 'Sutiã Adesivo',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Bege'],
    //         price: {
    //             withoutDiscount: 69.90,
    //             withDiscount: 44.90,
    //         }
    //     },
    //     {
    //         id: '10',
    //         name: 'Sutiã com Bojo',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Bege', 'Preto', 'Rosa Claro', 'Vermelho', 'Branco', 'Marrom'],
    //         price: {
    //             withoutDiscount: 69.90,
    //             withDiscount: 44.90,
    //         }
    //     },
    // ],

    // conjunto: [
    //     {
    //         id: '11',
    //         name: 'Conjunto Microfibra Sutiã com Bojo',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Azul'],
    //         price: {
    //             withoutDiscount: 89.90,
    //             withDiscount: 54.90,
    //         }
    //     },
    // ],

    // lingerie: [
    //     {
    //         id: '12',
    //         name: 'Lingerie com Bojo Camisere',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Preto', 'Bege Escuro', 'Branco', 'Bege'],
    //         price: {
    //             withoutDiscount: 89.90,
    //             withDiscount: 54.90,
    //         }
    //     },
    //     {
    //         id: '13',
    //         name: 'Camisere Lingerie',
    //         description: null,
    //         size:  ['P', 'M', 'G'],
    //         color: ['Preto', 'Branco', 'Bege Escuro'],
    //         price: {
    //             withoutDiscount: 89.90,
    //             withDiscount: 54.90,
    //         }
    //     },
    // ],

}
