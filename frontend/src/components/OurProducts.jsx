import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ButtonsCategory from "./ButtonsCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../store/slices/productSlice";

export default function OurProducts() {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.productSlice);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  // فلترة المنتجات حسب التصنيف
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // تقسيم الصفحات
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>

      {/* أزرار التصنيفات */}
      <ButtonsCategory
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
      />

      {/* عرض المنتجات */}
      <Row className="g-4 justify-content-center">
        {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
          currentProducts.map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <CardProduct
                id={item.id}
                img={item.thumbnail}
                title={item.title}
                subTitle={item.description}
                price={item.price}
                stock={item.stock} // ✅ أضفناها هنا
              />
            </Col>
          ))
        ) : (
          <h5 className="text-center text-muted mt-4">
            No products found in this category
          </h5>
        )}
      </Row>

      {/* التصفح بين الصفحات */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
}
