import styles from "../style";

const Products = () => (
    <>
    <div>
    <h3 id="products" className={`${styles.heading2} mb-4`}>Our services</h3>
    </div>
<div className="flex flex-row flex-wrap  ">

  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
 
 {/* Repeat this block for each team member */}
 <div className="w-full bg-black rounded-lg p-12 flex flex-col justify-center items-center">          <div className="mb-8">
         <img
           className="object-center object-cover rounded-full h-36 w-36"
           src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
           alt="photo"
         />
       </div>
       <div className="text-center">
         <p className="text-xl text-red-800 font-bold mb-2">Web Development</p>
       </div>
     </div>
     {/* End of team member block */}

 </section>

    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
 
 {/* Repeat this block for each team member */}
 <div className="w-full bg-black rounded-lg p-12 flex flex-col justify-center items-center">          <div className="mb-8">
         <img
           className="object-center object-cover rounded-full h-36 w-36"
           src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
           alt="photo"
         />
       </div>
       <div className="text-center">
         <p className="text-xl text-red-800 font-bold mb-2">Web Development</p>
       </div>
     </div>
     {/* End of team member block */}

 </section>

 <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
 
    {/* Repeat this block for each team member */}
    <div className="w-full bg-black rounded-lg p-12 flex flex-col justify-center items-center">          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-red-800 font-bold mb-2">Mobile App Development</p>
          </div>
        </div>
        {/* End of team member block */}

    </section>
    

 



  





    </div>
  </>
);

export default Products;