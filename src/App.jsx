import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Navbar } from './components';
import {
  Checkout,
  Home,
  Product,
  SearchResults,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
