import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Us from "./components/Us";
import Footer from "./components/Footer";
import Products from "./components/Products";
import React from "react";
import { animated, useSpring } from '@react-spring/web'



const App = () => {
  const styles1 = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div style={styles1} className="w-full bg-purple overflow-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Products />
      <Us />
      <Footer />
    </animated.div>
  );
};

export default App;
