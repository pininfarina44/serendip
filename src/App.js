import React from 'react';
import './App.css';

//components
import Header from "./components/header.js";
import Homepage from "./components/homepage.js";
import Footer from "./components/footer.js";
document.getElementsByTagName("html")[0].style.height = "100%";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />

    </div>
  );
}

export default App;
