// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Routing/Home';
// import { About } from './Routing/About';
import Navbar from './Routing/Navbar';
import OrderSummary from './Routing/OrderSummary'
import NoMatch from './Routing/NoMatch';
import Product from './Routing/Product';
import Featuredproduct from './Routing/Featuredproduct';
import NewProduct from './Routing/NewProduct';

const LazyAbout = React.lazy(() => import('./Routing/About'))
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className='mt-5'>this is third app</h1>
      </div>
      <Routes>


        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={
          <React.Suspense fallback>
            <LazyAbout />
          </React.Suspense>}>
          </Route>

      <Route path='/order-summary' element={<OrderSummary />}></Route>

      <Route path='*' element={<NoMatch />}></Route>


      {/*Nested-Routing*/}
      <Route path='/product' element={<Product />}>
        <Route index element={<NewProduct />} />
        <Route path='featured' element={<Featuredproduct />} />

        <Route path='new' element={<NewProduct />} />
      </Route>





    </Routes >
    </>
  );
}

export default App;
