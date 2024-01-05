import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (products.length === 0) {
    return <p>No product.</p>;
  }
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = products.map((product) => (
    <div
      className="col-md-12 h-100 w-18"
      key={product?.id}
      style={{ paddingLeft: "20px", marginRight: "20px" }}
    >
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product?.image}
            style={{ height: "100px", width: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="product-title">{product?.title}</Card.Title>
          <Card.Text>INR: {product?.price}</Card.Text>
          <Button variant="danger" onClick={() => removeToCart(product?.id)}>
            Remove item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
}

export default Cart;
