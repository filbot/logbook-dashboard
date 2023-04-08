import { useSelector, useDispatch } from "react-redux";
import { ArrowUp } from "./ArrowUp";
import { ArrowDown } from "./ArrowDown";
import { clearTable } from "../features/dashboard/dashboardSlice";

const Dashboard = () => {
  const { data } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  if (data.length === 0) {
    return (
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          Empty table
        </h1>
      </div>
    );
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Up-to-date pricing information on the world of digital currencies
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Asset
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Percent Change
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Current Price
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">
                    <p className="text-sm">{item.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">
                      {item.changePercent24Hr > 0 ? <ArrowUp /> : <ArrowDown />}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{item.changePercent24Hr}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{item.priceUsd}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
          </a>
          <button
            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            onClick={() => {
              dispatch(clearTable());
            }}
          >
            Clear Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
