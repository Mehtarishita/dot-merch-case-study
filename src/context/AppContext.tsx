"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  activeProductId: string | null;
  setActiveProductId: (id: string | null) => void;
  hasEntered: boolean;
  setHasEntered: (entered: boolean) => void;
  isFinalScene: boolean;
  setIsFinalScene: (isFinal: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isFinalScene, setIsFinalScene] = useState(false);

  return (
    <AppContext.Provider value={{ activeProductId, setActiveProductId, hasEntered, setHasEntered, isFinalScene, setIsFinalScene }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
