import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const Context = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  

  const url = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    totalFunc()
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

    const cartArr = [];

  const addToCart = (id) => {
    const selectedProduct = products.filter((e) => e.id === id);

    let amount = 1;
    
    let arr = selectedProduct.map((item) => item = {...item, amount});
    
    cartArr.push(...cart, ...arr);

    const uniqueTray = [...new Set(cartArr.map((item) => JSON.stringify(item)))].map((item) => JSON.parse(item));
      
    setCart(uniqueTray);
    
    setCartCount(uniqueTray.length);

  };

  const totalFunc = () => {
    let { updatedTotal } = cart? (cart.reduce((acc, curr) => {

      const {price, amount} = curr;
      
      let productTotal = amount * price;
      
      acc.updatedTotal += productTotal;
      
      return acc;
    }, 
    {
      updatedTotal : 0
    }
    )) : 0;

    setTotal(updatedTotal);

  }
  
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
        if (item.id === id) {
        item.amount = item.amount + 1;
      }
      return item;
    });
    
    setCart(updatedCart);
  };
  

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.amount !== 0) {
          item.amount = item.amount - 1;
        }
      }
      return item;
    });

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCartCount((prevState) => prevState -= 1);
    setCart(updatedCart);
  }




  return (
    <AppContext.Provider
      value={{
        products,
        addToCart,
        cart,
        cartCount,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        total
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
