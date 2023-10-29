import styles from "../style";
import  logo  from "../assets/logo.svg";
import { socialMedia } from "../constants";

const Footer = () => (
  
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} bg-black w-full flex-col`}>
  


    <div className="">
    <p className="text-white text-lg mb-4">connect with us</p>
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