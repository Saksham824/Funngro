import Fungro from '../assets/Funngro.png'
import play from '../assets/play-store.png'
import apple from '../assets/apple.png'

export default function Teen() {
  return (
    <section className="flex flex-wrap items-center justify-around p-1">
      <div className='m-auto'>
        <h2 className="text-[3.4375rem] font-[700] mb-4">TEENLANCERS</h2>
        <p className="text-lg text-[#dfdfdf]">Real companies, real projects, real earnings and real money</p>
        <p className="mt-[25px] text-[#dfdfdf] ">Smart opportunities for the smart generation</p>
        <div className="flex mt-[2rem] space-x-4 items-center">
          <p>Download App</p>
          <img className='w-[150px]' src={play} alt="" />
          <img className='w-[150px]' src={apple} alt="" />
        </div>
      </div>
      <div className='mt-[50px] m-auto'>
        <img src={Fungro}  alt="Shark Tank" className="w-[570px] m-auto" />
      </div>
    </section>
  );
}
