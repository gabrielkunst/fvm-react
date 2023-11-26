import { ModalContext } from "@/context/ModalContextProvider";
import { useContext } from "react";

export const useModal = () => useContext(ModalContext);
