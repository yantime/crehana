
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { PageCarrito } from "./pages/carrito/carrito";
import { PageCatalogo } from "./pages/catalogo/catalogo";
import { PageLanding } from "./pages/landing/landing";
import { PageLogin } from "./pages/login/login";
import { PageProducto } from "./pages/producto/producto";
import { PageRegister } from "./pages/register/register";
import "./assets/style/main.css";
import { Card } from "./components/card/card";
/*
Componente wrapper
*/
export function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
          <Switch>
            <Route path="/landing">
              <PageLanding />
            </Route>
            <Route path="/catalogo">
              <PageCatalogo />
            </Route>
            <Route path="/producto">
              <PageProducto />
            </Route>
            <Route path="/login">
              <PageLogin />
            </Route>
            <Route path="/register">
              <PageRegister />
            </Route>
            <Route path="/carrito">
              <PageCarrito />
            </Route>
            <Redirect exact from="/" to="/landing" />
            
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
