import styles from "../style";
import image from '../assets/games.png';
import image2 from '../assets/web.png';
import image3 from '../assets/mobile.png';
import { useSpring, animated } from '@react-spring/web';

const Products = () => {

  return (
    <div className="w-full">
      <div>
        <h3 id="products" className={`${styles.heading2} mb-4 pl-10 text-white `}>
          OUR SERVICES
        </h3>
      </div>
      <div className="flex flex-row flex-wrap ">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div >
            <div className="w-full bg-blue rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">
              <div className="mb-8 ">
                <img
                  className="object-center object-cover w-48 h-full "
                  src={image}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2 ">Game Development</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div >
            <div className="w-full bg-blue rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full w-48 h-full "
                  src={image2}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">Web Development</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div >
            <div className="w-full bg-blue rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">
              <div className="mb-8">
                <img
                  className="object-center object-cover w-48 h-full "
                  src={image3}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">Mobile Development</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
