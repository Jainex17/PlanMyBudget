import React, { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  email: string;
}

interface AppContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  income: number;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
  expenses: { id: number; name: string; amount: number }[];
  setExpenses: React.Dispatch<React.SetStateAction<{ id: number; name: string; amount: number }[]>>;
  totalExpenses: number;
  setTotalExpenses: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<number>(1);
  const [currency, setCurrency] = useState<string>("₹");
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<{ id: number; name: string; amount: number }[]>([]);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        currency,
        setCurrency,
        user,
        setUser,
        income,
        setIncome,
        expenses,
        setExpenses,
        totalExpenses,
        setTotalExpenses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
