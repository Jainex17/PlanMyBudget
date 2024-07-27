import { toast } from "react-toastify";
import { useAppContext } from "../AppContext";

export const UserForm = () => {

  const { user, setUser, setPage, setCurrency } = useAppContext();

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-[#E7F2E5]">
        User Information
      </h2>
      <div className="mt-5">
        <div className="relative flex items-center my-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
            >
              <path
                fill="currentColor"
                d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            placeholder="Enter Name"
            value={user?.name}
            onChange={(e) =>
              setUser({ name: e.target.value, email: user.email })
            }
            className="block w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 pr-5 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0"
          />
        </div>

        <div className="relative flex items-center my-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>

          <input
            type="email"
            placeholder="Enter User Email"
            value={user?.email}
            onChange={(e) =>
              setUser({ name: user.name, email: e.target.value })
            }
            className="block w-full py-2.5 placeholder-gray-400/70 border border-gray-200 rounded-lg pl-11 pr-5 bg-[#0c1311] text-gray-300 border-gray-400/20 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-0"
          />
        </div>

        <div className="relative flex items-center my-4">
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
            onChange={(e) => setCurrency(e.target.value)}
            defaultValue={"₹"}
          >
            <option value={"₹"}>Rupee</option>
            <option value={"$"}>Dollar</option>
            <option value={"€"}>Euro</option>
          </select>
        </div>

        <div className="flex justify-between">

            <button
              className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-7 mt-2 rounded-lg flex items-center gap-1"
              onClick={() => setPage(5)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"></path></svg>
                History</button>

          <button
            className="bg-[#A7CD9C] text-[#0c1311] transition font-medium py-2.5 px-10 mt-2 rounded-lg"
            onClick={() => {
              if(user.name && user.email){
                setPage(2);
              }else{
                toast.error("Please fill all the fields");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
