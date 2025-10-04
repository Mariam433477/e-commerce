import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MainButton } from "../custom/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

export default function DetailsProductSection() {
   

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { product, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );

  useEffect(() => {
    dispatch(getProductByIdAction(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          img: product.thumbnail,
          title: product.title,
          price: product.price,
        })
      );
      navigate("/home/cart");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>

          <MainButton onClick={handleAddToCart}>Add to Cart</MainButton>
        </div>
      </div>
    </div>
  );
}
