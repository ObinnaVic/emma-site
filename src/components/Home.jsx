import { useGlobalContext } from "./Context";
import carte from "./assets/image/cart.png"
import  "./Card/Card.css"

const Home = () => {
  const {products, addToCart} = useGlobalContext()

    return (
   <div >
        <div className='grid collection mt-[50px] gap-[30px]'>
          {products.map((item) => {
            const {images, id, title, price} = item
            
            return (
              <div key={id}>
                <div className=" item border m-[20px] rounded-[15px] shadow ">
                  <img
                    src={images[0]}
                    alt="wears"
                    className=" rounded-t-[15px]"
                  />

                  <div className="  m-[1rem] lg:m-[2rem]">
                    <p className=" font-bold text-[1rem] lg:text-[1.7rem]">
                      {" "}
                      {title}
                    </p>

                    <div className="font-bold lg:text-[1.3rem] text-700 text-[#374151] ">
                      Price: $ {price}
                    </div>
                  </div>

                  <div className="flex justify-end p-[10px] lg:p-[20px] ">
                    
                      <button
                        onClick={() => addToCart(id)}
                        className="flex gap-[1rem] text-[#D2691E] p-[10px] rounded border-2 border-[#A0522D]"
                      >
                        <div>
                          {" "}
                          <img
                            src={carte}
                            alt="cart"
                            className="w-[1.5rem] block "
                          />
                        </div>
                        <div>ADD</div>
                      </button>
                    
                  </div>
                </div>
              </div>
            );
              
              
            
          })}
      </div>
      
          
    </div>
  );
};

export default Home;