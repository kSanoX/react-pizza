import { Route, Routes } from 'react-router-dom'
import "../scss/app.scss";
import Header from "./components/PizzaBlock/Header"
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";
import { createContext, useState } from 'react';

export const searchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState('');
  
  return (
    <searchContext.Provider value={[searchValue, setSearchValue]}>
    <div className="wrapper">
      <Header/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/cart" element={<Cart></Cart>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
      </searchContext.Provider>
  );
}

export default App;
