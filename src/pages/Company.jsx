import Fungro from '../assets/Funngro.png';
import arrow from '../assets/arrow.png';

export default function Company() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 lg:px-16 py-10 items-center">
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-3xl sm:text-4xl lg:text-[55px] font-bold mb-4 leading-tight">
          Smart Talent for smart companies
        </h2>
        <p className="text-base sm:text-lg text-[#dfdfdf]">
          Cost effective, Timely delivery, Innovative ideas while you help the next generation
        </p>
        <p className="mt-4 text-base sm:text-lg text-[#dfdfdf]">
          Talented Teenagers for your company
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="flex items-center gap-3 bg-green-400 text-black font-semibold py-2 px-5 rounded-full hover:bg-green-500 transition">
            Hire Teenlancer
            <img className="w-6" src={arrow} alt="arrow" />
          </button>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm items-center">
          <span className="text-[15px] font-medium mr-2">Popular:</span>
          <span className="border px-3 py-1 rounded-full">Blogs</span>
          <span className="border px-3 py-1 rounded-full">Social Media</span>
          <span className="border px-3 py-1 rounded-full">Video Creation</span>
          <span className="border px-3 py-1 rounded-full">Sales</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center">
        <img
          src={Fungro}
          alt="Shark Tank"
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[570px]"
        />
      </div>
    </section>
  );
}
