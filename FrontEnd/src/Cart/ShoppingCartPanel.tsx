import { faShareAlt, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShoppingCartPanel = (props: any): JSX.Element => {
  return (
    <div className="container">
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
              <div className="row">
                <div className="col-2"><img className="img-responsive" src="http://placehold.it/100x70" alt="placeholder" />
                </div>
                <div className="col-4">
                  <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6 text-end">
                      <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4">
                      <input type="text" className="form-control input-sm" value="1" />
                    </div>
                    <div className="col-2">
                      <button type="button" className="btn btn-link btn">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
                <div className="row">
                  <div className="col-2"><img className="img-responsive" src="http://placehold.it/100x70" alt="placeholder" />
                  </div>
                  <div className="col-4">
                    <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-end">
                        <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                      </div>
                      <div className="col-4">
                        <input type="text" className="form-control input-sm" value="1" />
                      </div>
                      <div className="col-2">
                        <button type="button" className="btn btn-link btn">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
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
                      <h4 className="text-end mb-0 h5">Total <strong>$50.00</strong></h4>
                    </div>
                    <div className="col-3">
                      <button type="button" className="btn btn-success w-100">
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