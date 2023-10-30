import styles from "../style";

import { socialMedia } from "../constants";

const Footer = () => (
  
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} w-full bg-blue flex-col`}>
  


    <div className="">
    <p className="text-purple-off  cursor-pointer text-2xl mb-4">Connect with us</p>
    </div> 
      <div className="flex flex-row  md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

  </section>

);

export default Footer;