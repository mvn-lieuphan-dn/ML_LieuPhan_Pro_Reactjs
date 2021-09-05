import React from "react"
import { Switch, Route } from "react-router-dom"

const Main = React.lazy(() => import('../../components/Main'));
const Products = React.lazy(() => import('../../pages/Features/Products/index'));
const ProductsDetail = React.lazy(() => import('../../pages/Features/Products/_id/index'));
function Features() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Switch>
        <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/products/:id" children={<ProductsDetail />} />
      </Switch>
    </React.Suspense>
  );
}

export default Features;
