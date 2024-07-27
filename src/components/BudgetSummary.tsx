import { useState } from "react";
import { useAppContext } from "../AppContext";
import { toast } from "react-toastify";

export const BudgetSummary = () => {

  const { income, totalExpenses, setIncome, setTotalExpenses, setPage, currency, setCurrency } = useAppContext();

  const [convertedCurrency, setConvertedCurrency] = useState<string>("");

  const convertCurrencyHandler = async () => {

    const currencyCode = currency === "₹" ? "INR" : currency === "$" ? "USD" : "EUR";

    const url = `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}/latest/${currencyCode}`;
    
    const res = await fetch(url);
    if (!res.ok) {
      toast.error("Failed to convert currency");
      return;
    }
    const data = await res.json();

    if (convertedCurrency === "₹") {
      setIncome(Math.round((data.conversion_rates.INR * income)  * 100) / 100);
      setTotalExpenses(Math.round((data.conversion_rates.INR * totalExpenses)  * 100) / 100);
    } else if (convertedCurrency === "$") {
      setIncome(Math.round((data.conversion_rates.USD * income)  * 100) / 100);
      setTotalExpenses(Math.round((data.conversion_rates.USD * totalExpenses)  * 100) / 100);
    } else {
      setIncome(Math.round((data.conversion_rates.EUR * income)  * 100) / 100);
      setTotalExpenses(Math.round((data.conversion_rates.EUR * totalExpenses)  * 100) / 100);
    }

    setCurrency(convertedCurrency);
  }

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-[#E7F2E5]">
        Budget Summary
      </h2>
      <div className="mt-8">
        <div className="flex gap-5">
          <div className="bg-[#070c06] p-4 flex items-center rounded-md shadow-md gap-3 px-5 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 text-gray-200"
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
            <div>
              <h3 className="text-[#A7CD9C] text-base font-bold">Income</h3>
              <p className="text-[#E7F2E5] font-semibold text-2xl">
                {currency} {income}
              </p>
            </div>
          </div>

          <div className="bg-[#070c06] p-4 flex items-center rounded-md shadow-md px-5 gap-3 flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-14 text-gray-200" viewBox="0 0 512 512"><path fill="currentColor" d="M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1l-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6c-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7l-1-112.09zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4c12.6 6.4 22.4-3.5 30.4-23.3c3.3-13.5 8.2-23 23.4-39m-79.6 96c-.4 0-.9 0-1.3.1c-3.3.7-7.2 4.2-9.8 12.2c-2.7 8-3.3 19.4-.9 31.6c2.4 12.1 7.4 22.4 13 28.8c5.4 6.3 10.4 8.1 13.7 7.4c3.4-.6 7.2-4.2 9.8-12.1c2.7-8 3.4-19.5 1-31.6c-2.5-12.2-7.5-22.5-13-28.8c-4.8-5.6-9.2-7.6-12.5-7.6m82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3c-11.1 5.5-19.8 13.1-24.5 20.1c-4.7 6.9-5.1 12.1-3.6 15.2c1.5 3 5.9 5.9 14.3 6.3c8.4.5 19.7-1.8 30.8-7.3s19.8-13 24.5-20c4.7-6.9 5.1-12.2 3.6-15.2c-1.5-3.1-5.9-5.9-14.3-6.3c-1.1-.1-2.1-.1-3.3-.1m-97.6 95.6c-4.7.1-9 .8-12.8 1.9c-8.5 2.5-13.4 7-15 12.3c-1.7 5.4 0 11.8 5.7 18.7c5.8 6.8 15.5 13.3 27.5 16.9c11.9 3.6 23.5 3.5 32.1.9c8.6-2.5 13.5-7 15.1-12.3c1.6-5.4 0-11.8-5.8-18.7c-5.7-6.8-15.4-13.3-27.4-16.9c-6.8-2-13.4-2.9-19.4-2.8"></path></svg>

            <div>
              <h3 className="text-[#A7CD9C] text-base font-bold">Total Expenses</h3>
              <p className="text-[#E7F2E5] font-semibold text-2xl">
                {currency} {totalExpenses}
              </p>
            </div>
          </div>

        </div>
        <div className="bg-[#070c06] p-4 flex items-center rounded-md shadow-md px-5 gap-3 flex-1 my-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-14 text-gray-200"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></path><path d="M15.004 7.803C9.576 7.426 5.104 6.62 3 6v9.061c0 1.995 0 2.992.62 3.805s1.47 1.043 3.17 1.503c2.746.742 5.634 1.184 8.22 1.436c2.682.262 4.022.393 5.006-.506c.984-.898.984-2.343.984-5.231v-2.014c0-2.805 0-4.207-.807-5.077s-2.268-.972-5.19-1.174"></path><path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96"></path></g></svg>
            <div>
              <h3 className="text-[#A7CD9C] text-base font-bold">Remaining Budget</h3>
              <p className="text-[#E7F2E5] font-semibold text-2xl">
                {currency} {income - totalExpenses}
              </p>
            </div>
          </div>

        {/* convert into diffrent currency */}
        <div className="flex gap-5 items-center">
        
        <div className="relative flex items-center my-4 w-full">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
            >
              <path
                fill="currentColor"
                d="M17.005 16.003h2v-12h-10v2h8zm0 2v2.999c0 .553-.45 1-1.007 1H4.012a1 1 0 0 1-1.007-1l.002-13.998c0-.553.45-1.001 1.007-1.001h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-11.998-10l-.002 12h10v-12zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2z"
              ></path>
            </svg>
          </span>

          <select 
            className="block w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0 form-select appearance-none pr-8 bg-no-repeat"
            onChange={(e) => setConvertedCurrency(e.target.value)}
            defaultValue={currency}
          >
            <option value={"₹"}>
              Rupee
            </option>
            <option value={"$"}>Dollar</option>
            <option value={"€"}>Euro</option>
          </select>
        </div>

        <button className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 rounded-lg" onClick={convertCurrencyHandler}>
          Convert
        </button>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 mt-2 rounded-lg"
            onClick={() => setPage(2)}
          >
            Back
          </button>
          <button
            className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 mt-2 rounded-lg"
            onClick={() => setPage(4)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
