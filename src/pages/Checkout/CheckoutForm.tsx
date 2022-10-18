import React from 'react';
import { useNavigate } from 'react-router';
import { ShopContext } from "../../context/ShopContext";
import { ProductType } from '../../utils/types';
import BoughtProduct from './BoughtProduct';
import { countryList, stateList } from '../../utils/serviceData';

export const CheckoutForm = (props: any): JSX.Element => {

  const { productList, totalCost, setTotalCost, userInfo, setUserInfo } = React.useContext(ShopContext);

  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserInfo({ ...userInfo, [target.id]: target.value });
    console.log(userInfo);
  }

  const handleCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [target.id]: target.checked });
  }

  const handleSubmit = () => {
    navigate('/payment-interface');
  }

  const handleRadio = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [target.name]: target.id });
  }

  React.useEffect(() => {
    setTotalCost(totalCost - 5);
  }, [])

  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {
              productList && productList.length > 0 && productList.map((product: ProductType, index: number) => {
                return (
                  <BoughtProduct product={product} key={index}></BoughtProduct>
                )
              })
            }
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${totalCost}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation was-validated" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback" style={{ "width": "100%" }}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={(e) => handleChange(e)} />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required onChange={(e) => handleChange(e)} />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" onChange={(e) => handleChange(e)} />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required onChange={(e) => handleChange(e)}>
                  <option value="">Choose...</option>
                  {
                    countryList && countryList.length > 0 && countryList.map((country, index) => (
                      <option value={country} key={index}>{country}</option>
                    ))
                  }
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required onChange={(e) => handleChange(e)}>
                  <option value="">Choose...</option>
                  {
                    stateList && stateList.length > 0 && stateList.map((state, index) => (
                      <option value={state} key={index}>{state}</option>
                    ))
                  }
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address" onChange={(e) => handleCheck(e)} />
              <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info" onChange={(e) => handleCheck(e)} />
              <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" defaultChecked={true} className="custom-control-input" required onChange={(e) => handleRadio(e)} />
                <label className="custom-control-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" defaultChecked={false} className="custom-control-input" required onChange={(e) => handleRadio(e)} />
                <label className="custom-control-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" defaultChecked={false} className="custom-control-input" required onChange={(e) => handleRadio(e)} />
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required onChange={(e) => handleChange(e)} />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3 md-form md-outline input-with-post-icon datepicker">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="date" className="form-control" id="cc-expiration" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required onChange={(e) => handleChange(e)} />
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
};