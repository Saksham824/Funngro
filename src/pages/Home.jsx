import teen from '../assets/teen.svg';
import company from '../assets/company.svg';
import parent from '../assets/parent.svg';

export default function Home() {
  return (
    <div className="text-center mt-4 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-snug mb-4">
        Funngro Teenlancer
      </h1>
      <p className="text-base sm:text-lg text-[#dfdfdf] mb-10">
        Smart Teenagers meet Smart Companies
      </p>

      <div className="flex justify-center flex-wrap gap-6 sm:gap-10">
        {/* Teen Card */}
        <div className="bg-red-200 p-6 sm:p-8 rounded-full w-64 h-64 flex flex-col justify-center items-center">
          <img src={teen} alt="Teen" className="mb-4 w-16 h-16 sm:w-20 sm:h-20" />
          <p className="font-semibold text-black text-lg sm:text-xl">TEENLANCERS</p>
          <p className="text-base text-black font-normal">Be Independent</p>
        </div>

        {/* Company Card */}
        <div className="bg-blue-200 p-6 sm:p-8 rounded-full w-64 h-64 flex flex-col justify-center items-center">
          <img src={company} alt="Company" className="mb-4 w-16 h-16 sm:w-20 sm:h-20" />
          <p className="font-semibold text-black text-lg sm:text-xl">COMPANY</p>
          <p className="text-base text-black font-normal">Smart Talent Solution</p>
        </div>

        {/* Parent Card */}
        <div className="bg-yellow-200 p-6 sm:p-8 rounded-full w-64 h-64 flex flex-col justify-center items-center">
          <img src={parent} alt="Shelancer" className="mb-4 w-16 h-16 sm:w-20 sm:h-20" />
          <p className="font-semibold text-black text-lg sm:text-xl">SHELANCER</p>
          <p className="text-base text-black font-normal">Empowering Women</p>
        </div>
      </div>
    </div>
  );
}
