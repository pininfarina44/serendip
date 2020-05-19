import React from "react";
import {Route } from "react-router-dom";
import "./App.css";

//components
import Header from "./components/header.js";
import Home from "./components/homepage.js";
import About from "./components/about.js";
import Products from "./components/products.js";
import Contact from "./components/contact.js";
import Leadership from "./components/leadership.js";
import Footer from "./components/footer.js";
document.getElementsByTagName("html")[0].style.height = "100%";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact refresh path="/" component={Home} />
      <Route refresh path="/about" component={About} />
      <Route refresh path="/products" component={Products} />
      <Route refresh path="/leadership" component={Leadership} />
      <Route refresh path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
