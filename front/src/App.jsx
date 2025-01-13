import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Historia } from "./views/bMainViews/Historia";
import { Header } from "./views/aHeader/Header";
import { Footer } from "./views/cFooter/Footer";
import { Main } from "./views/bMainViews/Main";
import { Catalogo } from "./views/bMainViews/Catalogo";
import { HaceTuPedido } from "./views/bMainViews/HaceTuPedido";
import { Carrito } from "./views/bMainViews/Carrito";
import { Error } from "./views/bMainViews/Error";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <div className='contenedor'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/pedi" element={<HaceTuPedido />} />
              <Route path="/tuCompra" element={<Carrito />} />
              <Route path="/*" element={<Error/>}/>
            </Routes>
            </div>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
