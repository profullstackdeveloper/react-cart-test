import React from 'react';
import { faLock, faUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from '../../context/ShopContext';

export const PaymentInterface = (props: any): JSX.Element => {
  const { userInfo, totalCost } = React.useContext(ShopContext);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-4">
          <div className="card card-default">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="card-title h6 mb-0">
                Payment Details
              </h3>
              <div className="checkbox m-0">
                <label>
                  <input type="checkbox" className="me-1" />Remember
                </label>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="cardNumber" className="fw-bold mb-1">CARD NUMBER</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                      required autoFocus readOnly value={userInfo['cc-number']} />
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-7 col-md-7">
                    <div className="form-group mb-3">
                      <label htmlFor="expityMonth" className="fw-bold mb-1">EXPIRY DATE</label>
                      <div className="row">
                        <div className="col-6">
                          <input type="text" className="form-control" id="expityMonth" placeholder="MM" readOnly value={new Date(userInfo['cc-expiration'] ? userInfo['cc-expiration'] : 0).getMonth()} required />
                        </div>
                        <div className="col-6">
                          <input type="text" className="form-control" id="expityYear" placeholder="YY" readOnly value={new Date(userInfo['cc-expiration'] ? userInfo['cc-expiration'] : 0).getFullYear()} required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-end">
                    <div className="form-group mb-3">
                      <label htmlFor="cvCode" className="fw-bold mb-1">CV CODE</label>
                      <input type="password" className="form-control" id="cvCode" placeholder="CV" required readOnly value={userInfo['cc-cvv']} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ul className="nav nav-pills nav-stacked mt-2">
            <li className="active w-100">
              <div className="btn btn-primary d-flex justify-content-between align-items-center">
                <span className="text-white">
                  Final Payment
                </span>
                <span className="badge bg-white text-primary">
                  <FontAwesomeIcon icon={faUsd} />
                  {totalCost - 5}
                </span>
              </div>
            </li>
          </ul>
          <br />
          <button className="btn btn-success btn-lg btn-block w-100" type="button">Pay</button>
        </div>
      </div>
    </div>

  )
};