import React, { useContext, useState } from "react";
// styles
import styles from "../assets/css/Products.module.css";
// components
import Product from "../components/shared/Product";
import ReactPaginate from "react-paginate";
// Contexts
import { ProductContext } from "../context/ProductsContextProvider";
const Products = () => {
  const products = useContext(ProductContext);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;
  const visitedProducts = pageNumber * productsPerPage;
  const displayProducts = products
    .slice(visitedProducts, visitedProducts + productsPerPage)
    .map((product) => {
      return <Product key={product.id} productData={product} />;
    });
  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <div className={styles.productsContainer}>{displayProducts}</div>
      <div className={styles.paginationContainer}>
        <ReactPaginate
          nextLabel={">"}
          previousLabel={"<"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationList}
          nextLinkClassName={styles.nextButton}
          previousLinkClassName={styles.prevButton}
          activeLinkClassName={styles.activeButton}
          disabledLinkClassName={styles.disabledButton}
        />
      </div>
    </div>
  );
};

export default Products;
