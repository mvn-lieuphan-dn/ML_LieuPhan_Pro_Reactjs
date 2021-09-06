import { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { PRODUCTS } from '../../../core/utils/product';
import Box from './../../../components/commons/box';
export default function Product() {
  const [products] = useState(PRODUCTS);
  return (
    <main className="main-page">
      <div className="container bg-main">
        <ul className="users row">
          {
            products.map((p) => 
              <li key={p.id} className="box col-3">
                <Box product={p} />
              </li>
            )
          }
        </ul>
      </div>
    </main>
  )
}
