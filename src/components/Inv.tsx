import { FaCircleUser } from "react-icons/fa6";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { PiKeyReturnFill } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { BsBarChartFill } from "react-icons/bs";
import { FiChevronsDown } from "react-icons/fi";

const Inv = () => {
  return (
    <div className=" bg-neutral-100 h-screen">
      {/* NAV */}
      <div className="flex justify-between h-[80px]  items-center shadow-sm px-6 bg-white">
        <h1 className="text-lg font-semibold text-slate-500">
          INVESTMENT PORTFOLIO
        </h1>
        <div className="flex items-center gap-1">
          <FaCircleUser className="text-rose-400 text-xl" />

          <p className="text-sm font-semibold text-rose-400">CAMILA</p>
        </div>
      </div>

      {/* FILTER */}
      <div className="px-6 mt-4">
        <div className="w-[130px] h-[40px] flex items-center gap-2 justify-center rounded-full bg-white shadow-sm">
          <FiChevronsDown className="text-slate-700 "/>
          <p className="text-slate-700 text-[16px]">Past Month</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex mt-8 flex-col gap-6 bg-neutral-100 items-center justify-center">
        <div className="bg-white p-2 h-[130px] w-[90%] flex justify-center items-center shadow-sm border-b-2 border-white rounded border-b-blue-400">
          <div className="flex flex-col gap-2 w-[60%] items-center">
            <div className="flex gap-2 items-center">
              <GrMoney className="text-[30px] text-blue-400" />
              <p className="text-slate-400 text-lg">Amount Invested</p>
            </div>
            <div className="text-3xl text-slate-500">$62,540</div>
          </div>
        </div>
        <div className="bg-white p-2 h-[130px] w-[90%] flex justify-center items-center shadow-sm border-b-2 border-white rounded border-b-green-400">
          <div className="flex flex-col gap-2 w-[60%] items-center">
            <div className="flex gap-1 items-center">
              <PiCurrencyDollarSimpleFill className="text-[40px] text-green-400" />
              <p className="text-slate-400 text-lg">Total Earnings</p>
            </div>
            <div className="text-3xl text-slate-500">$128,105.90</div>
          </div>
        </div>
        <div className="bg-white p-2 h-[130px] w-[90%] flex justify-center items-center shadow-sm border-b-2 border-white rounded border-b-red-400">
          <div className="flex flex-col gap-2 w-[60%] items-center">
            <div className="flex gap-1 items-center">
              <BsBarChartFill className="text-[30px] text-red-400" />
              <p className="text-slate-400 text-lg">Total investments</p>
            </div>
            <div className="text-3xl text-slate-500">23</div>
          </div>
        </div>
        <div className="bg-white p-2 h-[130px] w-[90%] flex justify-center items-center shadow-sm border-b-2 border-white rounded border-b-purple-400">
          <div className="flex flex-col gap-2 w-[60%] items-center">
            <div className="flex gap-1 items-center">
              <PiKeyReturnFill className="text-[40px] text-purple-400" />
              <p className="text-slate-400 text-lg">Rate of return</p>
            </div>
            <div className="text-3xl text-slate-500">+104.87%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inv