import React, { Profiler } from 'react';
import s from './ProductPage.module.css';
import productsData from '../../data/products.json'
import ProductDetails from './ProductDetails';
import PropTypes from 'prop-types';

const findById = (products, id) => products.find(product => product.id === id);

function ProductPage({ match }) {
  const product = findById(productsData, Number(match.params.id));
  /*
  <source media="(min-width: 1200px)" srcSet={"http://placehold.it/800"} />
  <source media="(min-width: 768px)" srcSet="http://placehold.it/600" />
  <img src="http://placehold.it/320" alt="Фотография товара"/>
  */
  return (
    <section className={s.product_page}>
      {product ? <ProductDetails product={product} /> :
      <p style={{textAlign: "center", fontSize: "larger", margin: 0, padding: '100px'}}>Данный товар не найден!</p>}
    </section>
  )
}

ProductPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  view: PropTypes.string,
};

export default ProductPage;
