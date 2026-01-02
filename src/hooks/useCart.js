import { useState, useEffect } from "react";

function useCart() {
  const [cartItems, setCartItems] = useState([]);

  

  useEffect(() => {
    
    const updateCartItems = () => {
    const storedCart = localStorage.getItem("cart");
        if (storedCart) {setCartItems(JSON.parse(storedCart));} 
    }
    updateCartItems();
  }, []);

  

  const addToCart = (product) => {
    const cItems = [...cartItems, product]
    setCartItems(cItems);
    localStorage.setItem("cart", JSON.stringify(cItems));
    alert("Producto agregado al carrito");
  };

  const clearCartItems = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const removeFromCart = (id) => {
    const cItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cItems);
    localStorage.setItem("cart", JSON.stringify(cItems));
    alert("Producto eliminado del carrito");
  };

  return { cartItems, addToCart, removeFromCart, clearCartItems };
}

export default useCart;