import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductType } from '../../utils/types';

interface PropTypes {
    product: ProductType,
    index: number,
    removeProduct: (index: number) => void;
    setAmount: (index: number, amount: number) => void;
}

export default function Product({product, index, removeProduct, setAmount}: PropTypes): JSX.Element {
    
    return (
        <div className="row">
            <div className="col-2"><img className="img-responsive" src="http://placehold.it/100x70" alt="placeholder" />
            </div>
            <div className="col-4">
                <h4 className="product-name"><strong>{product.name}</strong></h4>
                <h4><small>{product.description}</small></h4>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-end">
                        <h6><strong>{Math.round(product.price).toFixed(2)} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control input-sm" value={product.amount} onChange={(e) => setAmount(index, Number(e.target.value))} />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-link btn" onClick={() => removeProduct(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}