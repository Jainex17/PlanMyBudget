import { UserForm } from "./components/UserForm";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { BudgetSummary } from "./components/BudgetSummary";
import { Review } from "./components/Review";
import { useAppContext } from "./AppContext";
import { History } from "./components/History";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const { page } = useAppContext();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="md:text-4xl text-2xl font-bold text-[#E7F2E5]">PlanMyBudget</h1>
        <hr className="md:w-1/3 w-3/4 md:my-7 my-3 border-[#A7CD9C]" />
      
        <div className="lg:w-1/2 w-11/12 mt-8 mb-16 flex justify-start flex-col bg-[#0c1311] md:p-10 p-3 rounded-xl">
        {page === 1 && <UserForm />}
        {page === 2 && <IncomeExpenses />}
        {page === 3 && <BudgetSummary />}
        {page === 4 && <Review />}
        {page === 5 && <History />}
        </div>
      </div>

      <ToastContainer
        theme="dark"
        autoClose={2000}
      />
    </>
  );
}

export default App;
