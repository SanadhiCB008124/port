import styles from "../style";
import React, { useEffect, useState } from "react";

import image from "../assets/header.png";
import bannerImg2 from "../assets/lap.png";
import bannerImg3 from "../assets/image4.png";


const textArray = ["Game Development","Web Development","Mobile App Development"]
const Hero = () => {

    const [count, setCount] = useState(0);

  
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => count + 1);
    }, 4000);

    return () => clearInterval(timerId);
  }, []);


  const text = textArray[count % textArray.length];

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}  `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16  `}>
        <div className="flex flex-row justify-between items-center w-full">
       
        
          <h1  className={`${styles.heading3} mb-4  text-white  font-poppins font-semibold  lg:ml-40 text-center `} >
            {text}
            <br className="sm:block hidden" />{" "}
          </h1>
    
        </div>
   
      </div>

      <div className={`flex ${styles.flexCenter} m-10  rounded-full bg-purple-off my-10 `}>
        <img src={image} alt="image" className="lg:w-[600px] lg:h-[600px] md:w-100px] md:h-[100px]" />

      </div>

    
    </section>
  );
};

export default Hero;