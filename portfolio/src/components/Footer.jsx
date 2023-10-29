import styles from "../style";
import  logo  from "../assets/logo.svg";
import { socialMedia } from "../constants";

const Footer = () => (
  
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

    <div className="">
    <p className="text-white text-lg">connect with us</p>
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
    </div>
  </section>

);

export default Footer;