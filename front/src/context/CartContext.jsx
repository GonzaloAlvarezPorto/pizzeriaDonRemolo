import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    return (
        <CartContext.Provider value={{ apiBaseUrl }}>
            {children}
        </CartContext.Provider>
    )
}