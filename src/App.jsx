import { Route, Routes } from 'react-router-dom'
import "../scss/app.scss";
import Header from "./components/PizzaBlock/Header"
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/cart" element={<Cart></Cart>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
