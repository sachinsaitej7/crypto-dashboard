import React, { createContext, useCallback, useContext, useRef, useState } from "react";
import { Coin } from "@/types";


interface DashBoardContext {
  coins: string[];
  addCoin: (coinId: string, data?: Partial<Coin>) => void;
    removeCoin: (coinId: string) => void;
    idMapCoinData: Record<string, Partial<Coin> | undefined>;
}

const DashBoardContext = createContext<DashBoardContext | null>(null);

const DashBoardProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
    const [coins, setCoins] = useState<string[]>([]);
    const idMapCoinData =  useRef<Record<string, Partial<Coin> | undefined>>({});

    const addCoin = useCallback((coinId: string, data?: Partial<Coin>) => {
      idMapCoinData.current[coinId] = data;
        setCoins((prevCoins) => {
        if (prevCoins.includes(coinId)) {
            return prevCoins;
        }
        return [...prevCoins, coinId];
        });
  }, []);

  const removeCoin = useCallback((coinId: string) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin !== coinId));
  }, []);

  return (
    <DashBoardContext.Provider
      value={{
        coins,
        addCoin,
              removeCoin,
            idMapCoinData: idMapCoinData.current,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};

export function useDashBoard() {
  const context = useContext(DashBoardContext);
  if (context === null) {
    throw new Error("useDashBoard must be used within a DashBoardProvider");
  }
  return context;
}

export default DashBoardProvider;
