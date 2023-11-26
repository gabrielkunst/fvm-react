import { ProductsContext } from "@/context/ProductsContextProvider";
import { useContext } from "react";

export const useProducts = () => useContext(ProductsContext);
