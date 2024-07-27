import { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";

interface BudgetData {
    user: {
        name: string;
        email: string;
    };
    currency: string;
    income: number;
    expenses: {
        id: number;
        name: string;
        amount: number;
    }[];
    totalExpenses: number;
}

export const History = () => {

    const { setPage } = useAppContext();

    const [budgetData, setBudgetData] = useState<BudgetData[]>();

    useEffect(() => {
        const localData = localStorage.getItem("budgetData");
        if (localData) {
            setBudgetData(JSON.parse(localData));
        }
    }, []);

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-[#E7F2E5]">History</h2>
      <div className="mt-5 grid sm:grid-cols-2 gap-5">
        {budgetData?.map((data, index) => (
            <div className="bg-[#070c06] p-4 rounded-md" key={index}>
            <div className="flex flex-col">
              <span>Name: {data.user.name}</span>
              <span>Email: {data.user.email}</span>
              <span>Currency: {data.currency}</span>
              <span>income: {data.income}</span>
            <span>Total Expenses: {data.totalExpenses}</span>
            <div>
                <h3 className="text-[#A7CD9C] text-base font-bold">Expenses</h3>
                <ul>
                    {data.expenses.map((expense, index) => (
                        <li key={index}>{expense.name}: {expense.amount}</li>
                    ))}
                </ul>
            </div>
            </div>
          </div>
          ))}
      </div>

      <button
        className="mt-7 py-2 px-4 bg-[#A7CD9C] text-[#070c06] rounded-md"
        onClick={() => setPage(1)}
    >Home</button>
    </>
  );
};
