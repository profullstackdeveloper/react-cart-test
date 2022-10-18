import React from 'react';
import { faShareAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from './Product';
import { ProductType } from '../../utils/types';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router';

export const ShoppingCartPanel = (props: any): JSX.Element => {

  const { productList, setProductList, totalCost } = React.useContext(ShopContext);

  const removeProduct = (index: number): void => {
    const temp: ProductType[] = productList.filter((product: ProductType, idx: number) => idx !== index);
    setProductList(temp);
  }

  const setAmount = (index: number, amount: number): void => {
    const temp: ProductType[] = productList.map((product: ProductType, idx: number) => {
      if(idx === index) {
        product.amount = amount;
        return product;
      } else {
        return product;
      }
    });
    setProductList(temp);
  }

  const navigate = useNavigate();

  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-8">
          <div className="card card-info">
            <div className="card-header">
              <div className="card-title">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h5 className="mb-0">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {" "}Shopping Cart
                    </h5>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-primary btn-sm w-100">
                      <FontAwesomeIcon icon={faShareAlt} />{" "}Continue shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              {
                productList && productList.length > 0 && productList.map((product: ProductType, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Product product={product} index={index} removeProduct={removeProduct} setAmount={setAmount}></Product>
                      <hr />
                    </React.Fragment>
                  )
                })
              }
              <div className="row text-center align-items-center">
                <div className="col-9">
                  <h6 className="text-end mb-0">Added items?</h6>
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-default btn-sm w-100 border">
                    Update cart
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row text-center align-items-center">
                <div className="col-9">
                  <h4 className="text-end mb-0 h5">Total <strong>${Math.round(totalCost - 5).toFixed(2)}</strong></h4>
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-success w-100" onClick={() => navigate('/checkout-form')}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};