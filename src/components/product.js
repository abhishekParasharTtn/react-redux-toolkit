/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return (
      <Alert variant="danger" key="danger">
        Something get wrong! try again later.
      </Alert>
    );
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div
      className="col-md-3 h-100 w-18"
      key={product?.id}
      style={{ marginBottom: "20px", paddingLeft: "20px", marginRight: "20px" }}
    >
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product?.image}
            style={{ height: "100px", width: "130px", marginTop: "10px" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="product-title">{product?.title}</Card.Title>
          <Card.Text>INR: {product?.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>PRODUCT DESHBOARD</h1>
      <div className="row justify-content-center">{cards}</div>
    </>
  );
}

export default Product;
