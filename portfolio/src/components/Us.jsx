import styles from "../style";
import aadil from '../assets/aadil.jpeg';
import hirundya from '../assets/hirundya.jpeg';
import yasiru from '../assets/yasiru.jpeg'
import sanadhi from '../assets/sanadhi.jpeg'

const Us = () => (
    <div className="">
        <div >
    <h3 id="About-us" className={`${styles.heading2} mb-4 pl-10 text-white `}>WHO WE ARE</h3>
    </div>


 <div className="flex flex-row  flex-wrap  m-10 ">
   <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
      <div className="w-full bg-blue rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">          
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src={aadil}
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2"> Aadil </p>
            <p className="text-base text-purple-off  font-normal">Project Manager / Developer</p>
            
          </div>
        </div>
    
    </section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
      <div className="w-full bg-blue  rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">          
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src={hirundya}
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Hirundya</p>
            <p className="text-base text-purple-off font-normal">Game Producer / Developer</p>
          </div>
        </div>
    
    </section>

    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
      <div className="w-full bg-blue  rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">          
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src={yasiru}
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Yasiru</p>
            <p className="text-base text-purple-off  font-normal">Game Artist / Developer</p>
          </div>
        </div>
    
    </section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
      <div className="w-full bg-blue  rounded-lg p-12 flex flex-col justify-center items-center transform transition-transform hover:scale-105">          
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src={sanadhi}
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Sanadhi </p>
            <p className="text-base text-purple-off font-normal">Game Programmer / Developer </p>
           
          </div>
        </div>
    
    </section>


 
    </div>
  </div>
);

export default Us;