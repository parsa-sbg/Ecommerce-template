import HomeMenu from "../components/Home/HomeMenu"
import HomeSlider from "../components/Home/HomeSlider/HomeSlider"
import SectionHeader from "../components/Home/SectionHeader"
import FlashSalesSlider from "../components/Home/FlashSalesSlider"
import SiteBtn from "../components/SiteBtn"

import CategoryItem from "../components/Home/CategoryItem"
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

import ProductBox from "../components/Home/ProductBox"








export default function Home() {
  return (
    <div className="mt-5 pb-48">


      {/* home section */}
      <div className="grid grid-cols-12 gap-7">

        <div className="hidden md:block md:col-span-3 lg:col-span-3">
          <HomeMenu />
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-9">
          <HomeSlider />
        </div>

      </div>


      {/* flash sales */}
      <div className="mt-10">

        <SectionHeader flagName='Today’s' title='Flash Sales' />
        <FlashSalesSlider />
        <div className="max-w-56 mx-auto">
          <SiteBtn text={'View All Products'} />
        </div>
      </div>


      {/* Categories */}
      <div className="border-y border-stone-400 mt-14 py-20">
        <SectionHeader flagName={'categories'} title={'Browse By Category'} />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiMobile4} name={'Phones'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={HiOutlineComputerDesktop} name={'Computers'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={BsSmartwatch} name={'SmartWatch'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiCamera} name={'Camera'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiHeadphones} name={'HeadPhones'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={LuGamepad} name={'Gaming'} /></div>
        </div>
      </div>


      {/* best selling */}
      <div className="mt-14">
        <SectionHeader isNeedViewAllBtn={true} flagName={'This Month'} title={'Best Selling Products'} />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/bookself.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/bag.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/coat.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/cooler.png'} /></div>
        </div>
      </div>


    </div>
  )
}
