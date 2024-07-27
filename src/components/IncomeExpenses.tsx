import { useState } from "react";
import { useAppContext } from "../AppContext";

export const IncomeExpenses = () => {
  
  const { income, totalExpenses, setIncome, setTotalExpenses, setPage, currency, setExpenses, expenses } = useAppContext();

  const [expensesName, setExpensesName] = useState<string>("");
  const [expensesAmount, setExpensesAmount] = useState<number>();

  function addExpenseHandler() {
    if (expensesName && expensesAmount) {
      const id = Math.floor(Math.random() * 1000) + 1;
      setExpenses([
        ...expenses,
        { id, name: expensesName, amount: expensesAmount },
      ]);
    setTotalExpenses(totalExpenses + expensesAmount);
      setExpensesName("");
      setExpensesAmount(0);
    }
  }

  function deleteExpense(id: Number, amount: number) {
    
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    setTotalExpenses(totalExpenses - amount);
  }

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-[#E7F2E5]">
        Income and Expenses
      </h2>
      <div className="my-5">
        <div className="relative flex items-center my-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M15 11v.01M5.173 8.378a3 3 0 1 1 4.656-1.377"></path>
                <path d="M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z"></path>
              </g>
            </svg>
          </span>

          <input
            type="number"
            placeholder="Enter Monthly Income"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
            min="0"
            className="w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 pr-5 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0 appearance-none"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="relative w-full flex items-center flex-1">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1l-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6c-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7l-1-112.09zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4c12.6 6.4 22.4-3.5 30.4-23.3c3.3-13.5 8.2-23 23.4-39m-79.6 96c-.4 0-.9 0-1.3.1c-3.3.7-7.2 4.2-9.8 12.2c-2.7 8-3.3 19.4-.9 31.6c2.4 12.1 7.4 22.4 13 28.8c5.4 6.3 10.4 8.1 13.7 7.4c3.4-.6 7.2-4.2 9.8-12.1c2.7-8 3.4-19.5 1-31.6c-2.5-12.2-7.5-22.5-13-28.8c-4.8-5.6-9.2-7.6-12.5-7.6m82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3c-11.1 5.5-19.8 13.1-24.5 20.1c-4.7 6.9-5.1 12.1-3.6 15.2c1.5 3 5.9 5.9 14.3 6.3c8.4.5 19.7-1.8 30.8-7.3s19.8-13 24.5-20c4.7-6.9 5.1-12.2 3.6-15.2c-1.5-3.1-5.9-5.9-14.3-6.3c-1.1-.1-2.1-.1-3.3-.1m-97.6 95.6c-4.7.1-9 .8-12.8 1.9c-8.5 2.5-13.4 7-15 12.3c-1.7 5.4 0 11.8 5.7 18.7c5.8 6.8 15.5 13.3 27.5 16.9c11.9 3.6 23.5 3.5 32.1.9c8.6-2.5 13.5-7 15.1-12.3c1.6-5.4 0-11.8-5.8-18.7c-5.7-6.8-15.4-13.3-27.4-16.9c-6.8-2-13.4-2.9-19.4-2.8"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              placeholder="Expenses Name"
              value={expensesName}
              onChange={(e) => setExpensesName(e.target.value)}
              min="0"
              className="w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 pr-5 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0 appearance-none"
            />
          </div>
          <div className="relative w-full flex items-center flex-1">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M15 11v.01M5.173 8.378a3 3 0 1 1 4.656-1.377"></path>
                  <path d="M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z"></path>
                </g>
              </svg>
            </span>

            <input
              type="number"
              placeholder="Monthly Expenses"
              value={expensesAmount}
              onChange={(e) => setExpensesAmount(parseInt(e.target.value))}
              min="0"
              className="w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 pr-5 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0 appearance-none"
            />
          </div>

          <button
            className="bg-[#A7CD9C] text-[#0c1311] w-full rounded-lg flex-1 p-2.5 font-semibold"
            onClick={addExpenseHandler}
          >
            Add Expense
          </button>
        </div>

        <div className="my-5">
          {expenses.length > 0 && (
            <h2 className="text-center text-xl font-semibold mb-5">All Expenses</h2>
          )}
          {expenses.length === 0 && (
            <p className="text-center text-gray-400">No expenses added yet</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {expenses.map((expense, index) => (
                <div key={index} className="bg-[#070c06] py-2 px-3 flex items-center gap-2 rounded-md">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 dark:text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-sm">{expense.name}</p>
                    <span className="text-xs text-gray-400">
                    {currency}{expense.amount}
                    </span>
                  </div>
                  <button onClick={()=> deleteExpense(expense.id, expense.amount)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-4 text-gray-400 dark:text-gray-500" ><path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path></svg>
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setPage(1)}
          className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 mt-2 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={() => setPage(3)}
          className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 mt-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </>
  );
};
