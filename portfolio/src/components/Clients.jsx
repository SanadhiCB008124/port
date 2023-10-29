import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <>
       <h3 id="clients" className={`${styles.heading2} `}>Our Sponsors</h3>


  <section className={`${styles.flexCenter} my-4 mb-10`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  </>
);

export default Clients;