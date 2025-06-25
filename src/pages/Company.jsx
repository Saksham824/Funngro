import Fungro from '../assets/Funngro.png'
import arrow from '../assets/arrow.png'

export default function Company() {
  return (
   <section className="grid gap-x-9 gap-y-9 grid-rows-[auto] grid-cols-2 auto-cols-fr place-items-center place-content-stretch">
         <div className='max-w-[27rem]'>
           <h2 className="text-[55px] font-[700] mb-4">Smart Talent for smart companies</h2>
           <p className="text-lg text-[#dfdfdf]">Cost effective, Timely delivery, Innovative ideas while you help the next generation</p>
           <p className="mt-[25px] text-lg text-[#dfdfdf] ">Talented Teenagers for your company</p>
           <div className='flex mt-4 bg-green-400 rounded-full'>
            <button className='flex flex-row justify-center items-center gap-4 rounded-[50px] no-underline text-center py-[8px] font-[600] m-auto'>Hire Teenlancer

            <img className='w-[30px] ' src={arrow} alt="" />
            </button>
           </div>
           <div className='mt-6 flex gap-2 text-sm items-center'>
            <h1 className='text-[15px]'>Popular:</h1>
            <span className='border px-2 py-1 rounded-full'>Blogs</span>
            <span className='border px-2 py-1 rounded-full'>Social Media</span>
            <span className='border px-2 py-1 rounded-full'>Video Creation</span>
            <span className='border px-2 py-1 rounded-full'>Sales</span>
           </div>
         </div>
         <div className='mt-[50px] w-[100%] mr-[30px] max-w-none'>
           <img src={Fungro}  alt="Shark Tank" className="w-[570px] m-auto" />
         </div>
       </section>
  );
}
