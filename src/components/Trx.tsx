import { RiMenu2Line } from "react-icons/ri";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { RiArrowDownCircleFill } from "react-icons/ri";

const Trx = () => {
  return (
    <div className=" bg-neutral-50 h-full">
      {/* Top */}
      <div className="bg-blue-700 text-white px-4 py-8">
        <nav className="flex gap-8 items-center">
          <RiMenu2Line className="text-[25px]" />
          <div className="w-full flex items-center justify-center">
            <p className="text-[14px] mr-12 font-semibold">TRANSACTIONS</p>
          </div>
        </nav>
        <p className="mt-4 mb-2 text-[18px] text-neutral-200">Balance</p>
        <div className="text-3xl">$12,865.45</div>
      </div>

      {/* Bottom */}
      <div className="bg-neutral-50 h-[400px] p-4">
        {/* Card 1 */}
        <div className="bg-white flex justify-between items-center p-4 h-[100px] w-full mx-auto shadow-sm rounded">
          <div className="flex items-center gap-3">
            <RiArrowDownCircleFill className="text-3xl text-red-400"/>
            <div className="flex flex-col">
              <p className="font-semibold text-sm text-slate-900">Sent</p>
              <p className="text-xs text-neutral-400">2 days ago</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-red-400 text-sm font-medium">+0.00102000 BTC</p>
            <p className="text-xs font-medium text-slate-900">234 USD</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white mt-3 flex justify-between items-center p-4 h-[100px] w-full mx-auto shadow-sm rounded">
          <div className="flex items-center gap-3">
            <RiArrowUpCircleFill className="text-3xl text-green-400"/>
            <div className="flex flex-col">
              <p className="font-semibold text-sm text-slate-900">Recieved</p>
              <p className="text-xs text-neutral-400">3 days ago</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-green-400 text-sm font-medium">+0.00102000 BTC</p>
            <p className="text-xs font-medium text-slate-900">234 USD</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white mt-3 flex justify-between items-center p-4 h-[100px] w-full mx-auto shadow-sm rounded">
          <div className="flex items-center gap-3">
            <RiArrowDownCircleFill className="text-3xl text-red-400"/>
            <div className="flex flex-col">
              <p className="font-semibold text-sm text-slate-900">Sent</p>
              <p className="text-xs text-neutral-400">5 days ago</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-red-400 text-sm font-medium">+0.00102000 BTC</p>
            <p className="text-xs font-medium text-slate-900">234 USD</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white mt-3 flex justify-between items-center p-4 h-[100px] w-full mx-auto shadow-sm rounded">
          <div className="flex items-center gap-3">
            <RiArrowUpCircleFill className="text-3xl text-green-400"/>
            <div className="flex flex-col">
              <p className="font-semibold text-sm text-slate-900">Recieved</p>
              <p className="text-xs text-neutral-400"> 6 days ago</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-green-400 text-sm font-medium">+0.00102000 BTC</p>
            <p className="text-xs font-medium text-slate-900">234 USD</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Trx;
