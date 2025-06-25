import teen from '../assets/teen.svg'
import company from '../assets/company.svg'
import parent from '../assets/parent.svg'

export default function Home() {
  return (
    <div className="text-center mt-[10px] p-13">
      <h1 className="text-[42px] font-[700] leading-[1.3] mb-4">Funngro Teenlancer</h1>
      <p className="text-lg text-[#dfdfdf] mb-10">Smart Teenagers meet Smart Companies</p>
      <div className="flex justify-center gap-10 flex-wrap">
       <div className='flex mt-[30px] gap-30'>
         <div className="bg-red-200 p-8 rounded-full w-75 h-75 flex flex-col justify-center items-center">
          <img src={teen} alt="Teen" className="mb-4" />
          <p className="font-semibold text-black text-[25px]">TEENLANCERS</p>
          <p className="text-[18px] text-black font-normal">Be Independent</p>
        </div>
        <div className="bg-blue-200 p-8 rounded-full w-75 h-75 flex flex-col justify-center items-center">
          <img src={company} alt="Company" className="mb-4" />
          <p className="font-semibold text-black text-[25px]">COMPANY</p>
          <p className="text-[18px] text-black font-normal">Smart Talent Solution</p>
        </div>
        <div className="bg-yellow-200 p-8 rounded-full w-75 h-75 flex flex-col justify-center items-center">
          <img src={parent} alt="Shelancer" className="mb-4" />
          <p className="font-semibold text-black text-[25px]">SHELANCER</p>
          <p className="text-[18px] text-black font-normal">Empowering Women</p>
        </div>
       </div>
      </div>
    </div>
  );
}
