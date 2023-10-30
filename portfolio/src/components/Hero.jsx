import styles from "../style";
import React, { useEffect, useState } from "react";

import image from "../assets/600.jpg";
import bannerImg2 from "../assets/lap.png";
import bannerImg3 from "../assets/image4.png";

//const imageArray = [bannerImg1, bannerImg2, bannerImg3];
const textArray = ["Game Development","Web Development","Mobile App Development"]
const Hero = () => {

    const [count, setCount] = useState(0);

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount(count => count + 1);
    }, 4000);

    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  //const image = imageArray[count % imageArray.length];
  const text = textArray[count % textArray.length];

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bg-gray-gradient   `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-gray-gradient `}>
        <div className="flex flex-row justify-between items-center w-full">
       
          <h1 className="flex-1 font-poppins font-semibold text-[62px] text-gradient text-white  ml-60">
            {text}
            <br className="sm:block hidden" />{" "}
          </h1>
    
        </div>
   
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={image} alt="image" className="w-[600px] h-[600px] relative z-[5]" />

     
      </div>

    
    </section>
  );
};

export default Hero;