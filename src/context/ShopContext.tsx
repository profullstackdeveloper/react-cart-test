import React, { Dispatch, SetStateAction } from 'react';
import { getProductList } from '../utils/serviceData';
import { PaymentMethod, ProductType, UserType } from '../utils/types';

interface ProviderPropTypes {
    children: any
}

interface ContextTypes {
    productList: ProductType[];
    setProductList: Dispatch<SetStateAction<ProductType[]>>;
    totalCost: number;
    setTotalCost: Dispatch<SetStateAction<number>>;
    userInfo: UserType;
    setUserInfo: Dispatch<SetStateAction<UserType>>;
}

export const ShopContext = React.createContext({} as ContextTypes);

export default function ShopeContextProvider({ children }: ProviderPropTypes) {
    const [productList, setProductList] = React.useState<ProductType[]>([]);
    const [userInfo, setUserInfo] = React.useState<UserType>({paymentMethod: PaymentMethod.CREDIT} as UserType);
    const [totalCost, setTotalCost] = React.useState<number>(0);

    React.useEffect(() => {
        let sum = 0;
        console.log('product list changed to ', productList);
        productList.forEach((product) => {
            sum += product.amount * product.price;
        });
        setTotalCost(sum);
    }, [productList])

    React.useEffect(() => {
        const products = getProductList();
        setProductList(products);
    }, []);

    return (
        <ShopContext.Provider
            value={{
                productList,
                setProductList,
                totalCost,
                setTotalCost,
                userInfo,
                setUserInfo
            }}
        >
            {
                children
            }
        </ShopContext.Provider>
    )
}