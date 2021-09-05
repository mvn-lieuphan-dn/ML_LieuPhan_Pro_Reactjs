import {
  useParams
} from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { PRODUCTS } from "../../../../core/utils/product";
import { useDispatch } from 'react-redux';
import { toggle } from '../../../../store/favSlide';

export default function ProductDetail() {
  const { id }= useParams();
  const [product, setProduct] = useState([])
  useEffect(() => {
    PRODUCTS.map(p => {
      if (p.id == Number(id)) {
        setProduct(p)
      }
    })
  }, [])
  // const dispatch = useDispatch();

  // function handleFav () {
  //   setProduct({...product, favorite: !product.favorite});
  //   dispatch(toggle(id));
  // }
  return (
    <div className="container bg-main">
      <div className="d-flex row py-4">
        <img className="col-6" src={product.img}></img>
        <div className="col-6 pl-20">
          <h2 className="mb-4">{product.name}</h2>
          <strong className="pb-20 font-20">PRICE: {product.price}</strong><br/>
          {/* <span className={`icon-fav font-40 ${product.favorite ? 'active-fav' : ''}`} onClick={(event) => handleFav(event)}><FaHeart /></span> */}
          <p className="pt-20">The entrance is decorated with ornamentation that depict relic-shrine, a lotus flower and geometrical patterns; another is an inaccessible cave with two rooms, a well, and stone beds in three adjoining rooms with an incomplete relic-shrine in low relief; two other adjoining caves have a chapel and a front veranda.</p>
          <p>Lotus is committed to an all-inclusive, turnkey approach – when we create something for you, we leave no stone unturned. After all, efficient communications with the consumer should always be engaging and interactive.</p>
        </div>
      </div>
    </div>
  )
}
