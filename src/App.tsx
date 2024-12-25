import { FaCircleUser } from "react-icons/fa6";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { PiKeyReturnFill } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";


function App() {
  return (
    <div className=" bg-neutral-100 h-screen">
      <div className="flex justify-between h-[60px]  items-center shadow-sm px-6 bg-white">
        <h1 className="text-base font-semibold text-slate-500">INVESTMENT PORTFOLIO</h1>
        <div className="flex items-center gap-1">
          <FaCircleUser className="text-rose-400 text-xl" />

          <p className="text-sm font-semibold text-rose-400">Lilian</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex mt-8 flex-col gap-6 bg-neutral-100 items-center justify-center">
        <div className="bg-white p-2 h-[130px] w-[90%] shadow-sm border-b-2 border-white rounded border-b-blue-400">
          <div className="flex flex-col gap-2 w-[60%] mx-auto items-center">
            <div className="flex gap-2 items-center">
              <GrMoney className="text-[30px] text-blue-400"/>
              <p className="text-slate-400 text-lg">Total Invested</p>
            </div>
            <div className="text-3xl text-slate-500">$678,375</div>
          </div>

        </div>
        <div className="bg-white p-2 h-[130px] w-[90%] shadow-sm border-b-2 border-white rounded border-b-green-400">
          <div className="flex flex-col gap-2 w-[60%] mx-auto items-center">
            <div className="flex gap-1 items-center">
              <PiCurrencyDollarSimpleFill className="text-[40px] text-green-400"/>
              <p className="text-slate-400 text-lg">Total Earnings</p>
            </div>
            <div className="text-3xl text-slate-500">$1,356,750</div>
          </div>

        </div>
        <div className="bg-white p-2 h-[130px] w-[90%] shadow-sm border-b-2 border-white rounded border-b-purple-400">
          <div className="flex flex-col gap-2 w-[60%] mx-auto items-center">
            <div className="flex gap-1 items-center">
              <PiKeyReturnFill className="text-[40px] text-purple-400"/>
              <p className="text-slate-400 text-lg">Rate of return</p>
            </div>
            <div className="text-3xl text-slate-500">+100.00%</div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
