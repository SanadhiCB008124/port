import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Us from "./components/Us";
import Footer from "./components/Footer";
import Products from "./components/Products";


const App = () => (
  <div className="bg-gray-gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  
      
      
        <Clients />
        <Products />
        <Us />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;