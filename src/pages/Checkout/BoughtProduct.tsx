import { ProductType } from '../../utils/types';

interface PropTypes {
    product: ProductType;
}

export default function BoughtProduct({ product }: PropTypes): JSX.Element {
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{product.name}</h6>
                <small className="text-muted">{product.description}</small>
            </div>
            <span className="text-muted">${product.amount * product.price}</span>
        </li>
    )
}