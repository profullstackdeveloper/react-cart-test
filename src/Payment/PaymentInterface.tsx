import { faLock, faUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PaymentInterface = (props: any): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
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
                      required autoFocus />
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
                          <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                        </div>
                        <div className="col-6">
                          <input type="text" className="form-control" id="expityYear" placeholder="YY" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-end">
                    <div className="form-group mb-3">
                      <label htmlFor="cvCode" className="fw-bold mb-1">CV CODE</label>
                      <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ul className="nav nav-pills nav-stacked mt-2">
            <li className="active w-100">
              <a href="/" className="btn btn-primary d-flex justify-content-between align-items-center">
                <span className="text-white">
                  Final Payment
                </span>
                <span className="badge bg-white text-primary">
                  <FontAwesomeIcon icon={faUsd} />
                  4200
                </span>
              </a>
            </li>
          </ul>
          <br />
          <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-lg btn-block w-100" role="button">Pay</a>
        </div>
      </div>
    </div>

  )
};