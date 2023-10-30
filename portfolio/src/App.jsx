import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Us from "./components/Us";
import Footer from "./components/Footer";
import Products from "./components/Products";
import React from "react";

const App = () => (
 
  <div className=" w-full bg-purple overflow-hidden scroll-smooth ">
 
    <Navbar />

    <Hero />
    
    <Products />
       
       <Us />
  
       <Clients />
    <Footer />
  </div>
);

export default App;