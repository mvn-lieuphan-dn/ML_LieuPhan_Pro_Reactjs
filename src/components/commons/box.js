import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../core/utils/product';
import { useDispatch } from 'react-redux';
import { toggle } from '../../store/favSlide';

export default function Box(props) {
  const [product, setProduct] = useState(PRODUCTS)
  const dispatch = useDispatch();

  function handleFav (e, id) {
    e.preventDefault();
    const newProds = product.map(e => {
      if (e.id === id) {
        e.favorite = !e.favorite;
      }
      return e;
    });
    setProduct(newProds);
    dispatch(toggle(id));
  }

  return (
    <Link to={`/products/${props.product.id}`} className="wrapper d-block">
      <img src={props.product.img}></img>
      <span className={`icon-fav ${props.product.favorite ? 'active-fav' : ''}`} onClick={(event) => handleFav(event, props.product.id)}><FaHeart /></span>
      <div className="d-flex justify-content-between px-1">
        <h3 className="name">{props.product.name}</h3>
        <p className="price">{props.product.price}</p>
      </div>
    </Link>
  );
}
