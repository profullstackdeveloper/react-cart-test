export interface ProductType {
    name: string;
    description: string;
    price: number;
    amount: number;
}

export enum PaymentMethod {
    CREDIT = 'credit',
    DEBIT = 'debit',
    PAYPAL = 'paypal',
}

export interface UserType {
    firstName: string;
    lastName: string;
    username: string;
    email?: string;
    address: string;
    address2?: string;
    country: string;
    state: string;
    zip: string;
    'same-addres'?: boolean;
    'save-info'?: boolean;
    paymentMethod: PaymentMethod;
    'cc-name': string;
    'cc-number': string;
    'cc-expiration': Date;
    'cc-cvv': string;
}