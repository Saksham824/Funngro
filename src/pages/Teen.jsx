import { Helmet } from 'react-helmet';
import Fungro from '../assets/Funngro.png';
import play from '../assets/play-store.png';
import apple from '../assets/apple.png';

export default function Teen() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Teenlancers | Funngro</title>
        <meta name="description" content="Earn real money by working on real projects for real companies. Join Teenlancers and unlock smart opportunities for the smart generation." />
        <meta name="keywords" content="teenlancers, funngro, earn money for teenagers, teenage freelance, real company projects, app download" />
        <meta name="author" content="Funngro" />
        <meta property="og:title" content="Teenlancers | Funngro" />
        <meta property="og:description" content="Smart opportunities for the smart generation – Earn while you learn with real projects from real companies." />
        <meta property="og:image" content="https://yourdomain.com/path-to-thumbnail.png" />
        <meta property="og:url" content="https://yourdomain.com/teen" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 lg:px-16 py-10 items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.4375rem] font-bold mb-4 leading-tight">
            TEENLANCERS
          </h2>
          <p className="text-base sm:text-lg text-[#dfdfdf]">
            Real companies, real projects, real earnings and real money
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#dfdfdf]">
            Smart opportunities for the smart generation
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="text-white font-medium">Download App</span>
            <img className="w-32 sm:w-36" src={play} alt="Play Store" />
            <img className="w-32 sm:w-36" src={apple} alt="Apple Store" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={Fungro}
            alt="Teenlancer App"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[570px]"
          />
        </div>
      </section>
    </>
  );
}
