import React from 'react';
import './App.css';

//components
import Header from "./components/header.js";
//import Homepage from "./components/homepage.js";
//import About from "./components/about.js";
//import Products from "./components/products.js";
import Contact from "./components/contact.js"
import Footer from "./components/footer.js";
document.getElementsByTagName("html")[0].style.height = "100%";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
