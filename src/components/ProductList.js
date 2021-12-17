import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard';

function PostList() {
  const [ productList, setProductList ] = useState([]);

  function fetchProducts() {
    const URL_PRODUCTS_API = 'https://ecommerce-backend-g7.herokuapp.com/api/v1/products';
    axios
      .get(URL_PRODUCTS_API)
      .then(response => setProductList(response.data.products))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="m-4">
      <h3 className="display-4 text-center my-5">Lista de productos!</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-0">
      {
        productList.map(product => (
          <ProductCard key={ product._id } id={ product._id } name={ product.name } description={ product.description } price={ product.price} imgUrl={ product.imgUrl } category={ product.category } />
        ))
      }
      </Row>
    </div>
  )
}

export default PostList
