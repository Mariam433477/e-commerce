import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites) || [];

  const validFavorites = favorites.filter(
    (item) => item !== null && item !== undefined
  );

  if (!validFavorites.length)
    return <h1 className="text-center mt-5">لا يوجد مفضلات حالياً.</h1>;

  return (
    <div className="container mt-4">
      <div className="row g-3 justify-content-center">
        {validFavorites.map((item) => {
          const { id, img, title, subTitle, price, stock } = item;

          if (!id || !img) return null;

          return (
            <div
              key={id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
            >
              <CardProduct
                id={id}
                img={img}
                title={title || "بدون عنوان"}
                subTitle={subTitle || ""}
                price={price || 0}
                stock={stock || 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
