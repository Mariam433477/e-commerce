import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MainButton } from "../custom/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

export default function DetailsProductSection() {
  // const products = [
  //   {
  //     id: 1,
  //     img: img1,
  //     title: "First slide label",
  //     subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //     price: 120,
  //   },
  //   {
  //     id: 2,
  //     img: img2,
  //     title: "Second slide label",
  //     subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: 90,
  //   },
  //   {
  //     id: 3,
  //     img: img3,
  //     title: "Third slide label",
  //     subTitle:
  //       "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //     price: 150,
  //   },
  //   {
  //     id: 4,
  //     img: img1,
  //     title: "First slide label",
  //     subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //     price: 200,
  //   },
  //   {
  //     id: 5,
  //     img: img2,
  //     title: "Second slide label",
  //     subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: 75,
  //   },
  //   {
  //     id: 6,
  //     img: img3,
  //     title: "Third slide label",
  //     subTitle:
  //       "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //     price: 130,
  //   },
  //   {
  //     id: 7,
  //     img: img1,
  //     title: "First slide label",
  //     subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //     price: 220,
  //   },
  //   {
  //     id: 8,
  //     img: img2,
  //     title: "Second slide label",
  //     subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: 85,
  //   },
  //   {
  //     id: 9,
  //     img: img3,
  //     title: "Third slide label",
  //     subTitle:
  //       "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //     price: 160,
  //   },
  // ];

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
      navigate("/cart");
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
