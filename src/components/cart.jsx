import { useGlobalContext } from "./Context";
 
const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } = useGlobalContext();
  
   if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center">Your Cart is Empty at the moment, <br /> Please add a product</h1>
      </div>
    )
   }
  
  return (
    <div className="w-[100%] h-[100%]">
      {cart?.map((product) => {
        const { title, images, id, price, amount } = product
        return (
          <div key={id} className="  w-[60%] m-auto my-[50px]  ">
            <div className="lg:w-[50%] shadow rounded-[15px] ">
              <img
                src={images[0]}
                alt="wears"
                className="w-[100%] rounded-t-[15px]"
              />
              <h3 className=" m-[1rem] lg:m-[2rem] font-bold text-[1rem] lg:text-[1.7rem] ">
                {title}
              </h3>
              <p className=" m-[1rem] lg:m-[2rem] font-bold lg:text-[1.3rem] text-[1rem] text-[#374151] pb-[10px]">
                {" "}
                Price: $ {price}{" "}
              </p>

              <p>Quantity: {amount}</p>
              <button
                className="text-red-500 underline"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
              <button
                className="border-green-500 p-2"
                onClick={() => increaseQuantity(id)}
              >
                +
              </button>
              <button
                className="border-red-500 p-2"
                onClick={() => decreaseQuantity(id)}
              >
                -
              </button>
            </div>
          </div>
        );
     })}

     <div>
      <h1>TOTAL: {total}</h1>
     </div>
    </div>
  );
}

export default Cart;
