"use client";
import React, { createContext, useContext, useState } from "react";


interface IOpenContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenContext = createContext<IOpenContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export const OpenContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw Error("An open context must be within an open context provider");
  }
  return context;
};
