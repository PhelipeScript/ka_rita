interface ProductProps {
    id: string;
    name: string;
    description: string | null;
    size: string[];
    color: string[];
    price: { withoutDiscount: number, withDiscount: number }
}

interface Items {
    calcinha: ProductProps[];
    sutia: ProductProps[];
    conjunto: ProductProps[];
    lingerie: ProductProps[];
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        },
    ],

    sutia: [
        {
            id: '8',
            name: 'Sutiã Loba Abertura Frontal',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            }
        },
        {
            id: '9',
            name: 'Sutiã Adesivo',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            }
        },
        {
            id: '10',
            name: 'Sutiã com Bojo',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Bege', 'Preto', 'Rosa Claro', 'Vermelho', 'Branco', 'Marrom'],
            price: {
                withoutDiscount: 69.90,
                withDiscount: 44.90,
            }
        },
    ],

    conjunto: [
        {
            id: '11',
            name: 'Conjunto Microfibra Sutiã com Bojo',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Azul'],
            price: {
                withoutDiscount: 89.90,
                withDiscount: 54.90,
            }
        },
    ],

    lingerie: [
        {
            id: '12',
            name: 'Lingerie com Bojo Camisere',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Preto', 'Bege Escuro', 'Branco', 'Bege'],
            price: {
                withoutDiscount: 89.90,
                withDiscount: 54.90,
            }
        },
        {
            id: '13',
            name: 'Camisere Lingerie',
            description: null,
            size:  ['P', 'M', 'G'],
            color: ['Preto', 'Branco', 'Bege Escuro'],
            price: {
                withoutDiscount: 89.90,
                withDiscount: 54.90,
            }
        },
    ],

}