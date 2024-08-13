import StatisticItem from "../components/About/StatisticItem"
import { CiShop } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoGiftSharp } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import ManagerBox from "../components/About/ManagerBox";
import OurServices from '../components/OurServices/OurServices'


export default function About() {
  return (
    <div className="">


      {/* our story section */}
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col justify-center col-span-2 sm:col-span-1 order-1">
          <h1 className="font-bold text-4xl">Our Story</h1>
          <p className="mt-5 text-lg">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="mt-5 text-lg">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="col-span-2 sm:col-span-1 sm:order-3">
          <img className="w-full h-full object-contain" src="/assets/images/ourstoryImages/ourstory.png" alt="" />
        </div>
      </div>


      {/* statistics */}
      <div className="grid grid-cols-12 mt-20 gap-5">
        <div className="col-span-6 md:col-span-4 lg:col-span-3" ><StatisticItem number={10.5} desc={'Sallers active our site'} Icon={CiShop} /></div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3" ><StatisticItem number={33} desc={'Mopnthly Produduct Sale'} Icon={PiCurrencyCircleDollarLight} /></div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3" ><StatisticItem number={45.5} desc={'Customer active in our site'} Icon={IoGiftSharp} /></div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3" ><StatisticItem number={25} desc={'Anual gross sale in our site'} Icon={FaSackDollar} /></div>

      </div>


      {/* managers */}
      <div className="grid grid-cols-12 gap-5 mt-20 ">
        <div className="col-span-12 text-center sm:col-span-6 md:col-span-4 md:text-start" ><ManagerBox name={'Tom Cruise'} jobPosition={'Founder & Chairman'} imageUrl={'/assets/images/ourstoryImages/person1.png'} /></div>
        <div className="col-span-12 text-center sm:col-span-6 md:col-span-4 md:text-start" ><ManagerBox name={'Emma Watson'} jobPosition={'Managing Director'} imageUrl={'/assets/images/ourstoryImages/person2.png'} /></div>
        <div className="sm:col-span-3 md:hidden"></div>
        <div className="col-span-12 text-center sm:col-span-6 md:col-span-4 md:text-start" ><ManagerBox name={'Will Smith'} jobPosition={'Product Designer'} imageUrl={'/assets/images/ourstoryImages/person3.png'} /></div>
      </div>


      {/* services */}
      <div className="mb-20 mt-32">
        <OurServices />
      </div>

    </div>
  )
}
