import { ProductType } from "./types";

export const countryList: string[] = [
    'United States'
];

export const stateList: string[] = [
    'California'
]

export const getProductList = (): ProductType[] => {
    return [
        {
            name: 'Product name',
            description: 'Product description',
            price: 25.00,
            amount: 0,
        },
        {
            name: 'Product name',
            description: 'Product description',
            price: 25.00,
            amount: 0
        },
    ]
}